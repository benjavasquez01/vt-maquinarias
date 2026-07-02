"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

// Web Speech API type declarations (not universally in lib.dom.d.ts)
interface SpeechRecognitionEvent extends Event {
  readonly results: SpeechRecognitionResultList;
}
interface SpeechRecognitionInstance {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onstart: (() => void) | null;
  onresult: ((e: SpeechRecognitionEvent) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start: () => void;
  stop: () => void;
}
type SpeechRecognitionCtor = new () => SpeechRecognitionInstance;
declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  }
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AISalesAgentProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "quote" | "demo";
}

const OPENING_MESSAGES: Record<"en" | "es", Record<string, string>> = {
  en: {
    quote: "Hi! I'm Benjamin, your VT Maquinarias sales representative. I'm here to help you find the right machine for your shop and get you accurate pricing. What kind of metalworking are you doing — cutting, bending, welding, or something else?",
    demo: "Hi! I'm Benjamin, your VT Maquinarias sales representative. I see you're interested in our welding automation systems. What are you currently welding, and what's driving your interest in automation?",
  },
  es: {
    quote: "¡Hola! Soy Benjamin, tu representante de ventas de VT Maquinarias. Estoy aquí para ayudarte a encontrar la máquina adecuada para tu taller y darte precios precisos. ¿Qué tipo de trabajo en metal realizas — corte, plegado, soldadura u otra cosa?",
    demo: "¡Hola! Soy Benjamin, tu representante de ventas de VT Maquinarias. Veo que te interesa nuestros sistemas de automatización de soldadura. ¿Qué estás soldando actualmente y qué te llevó a considerar la automatización?",
  },
};

const LEAD_COMPLETE_MARKER = "LEAD_COMPLETE:";
const LEAD_PARTIAL_MARKER = "LEAD_PARTIAL:";

// Split a response into separate bubbles at each question boundary
function splitQuestions(text: string): string[] {
  const parts = text.split(/(?<=\?)\s+/);
  return parts.map((p) => p.trim()).filter(Boolean);
}

// Render text with question sentences highlighted in red
function renderHighlighted(text: string): React.ReactNode {
  const sentences = text.split(/(?<=[.!?])\s+/);
  return sentences.map((sentence, i) => (
    <span key={i}>
      {i > 0 ? " " : ""}
      {/* Lighter red than brand vtm-red: questions sit on a dark bubble and need AA contrast */}
      <span className={sentence.trimEnd().endsWith("?") ? "text-[#ff8a8b] font-medium" : ""}>
        {sentence}
      </span>
    </span>
  ));
}

// Merge consecutive assistant messages before sending to API
function mergeForApi(msgs: Message[]): Message[] {
  const merged: Message[] = [];
  for (const msg of msgs) {
    const last = merged[merged.length - 1];
    if (last?.role === "assistant" && msg.role === "assistant") {
      merged[merged.length - 1] = { ...last, content: last.content + " " + msg.content };
    } else {
      merged.push(msg);
    }
  }
  return merged;
}

export function AISalesAgent({ isOpen, onClose, mode = "quote" }: AISalesAgentProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [language] = useState<"en" | "es">("es");
  const [leadComplete, setLeadComplete] = useState(false);
  const leadSentRef = useRef<"none" | "partial" | "complete">("none");
  const messagesRef = useRef<Message[]>([]);
  const languageRef = useRef<"en" | "es">("es");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Keep refs in sync for use in close handlers
  useEffect(() => { messagesRef.current = messages; }, [messages]);
  useEffect(() => { languageRef.current = language; }, [language]);

  // Initialize on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const opening = OPENING_MESSAGES[language][mode];
      setMessages([{ role: "assistant", content: opening }]);
      leadSentRef.current = "none";
      if (voiceEnabled) speakText(opening, language);
    }
  }, [isOpen, mode]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset conversation when language changes
  useEffect(() => {
    if (messages.length > 0) {
      setLeadComplete(false);
      leadSentRef.current = "none";
      const opening = OPENING_MESSAGES[language][mode];
      setMessages([{ role: "assistant", content: opening }]);
    }
  }, [language]); // eslint-disable-line react-hooks/exhaustive-deps

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Keyboard: Escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const speakText = async (text: string, lang: "en" | "es") => {
    if (!voiceEnabled) return;
    // Strip JSON marker before speaking
    const cleanText = text.replace(/LEAD_COMPLETE:\{.*\}/s, "").trim();
    if (!cleanText) return;
    try {
      const res = await fetch("/api/speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: cleanText.slice(0, 400), language: lang }),
      });
      if (!res.ok) return;
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      if (audioRef.current) {
        audioRef.current.pause();
        URL.revokeObjectURL(audioRef.current.src);
      }
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.play().catch(() => {}); // Respect browser autoplay policy
    } catch {
      // Voice is non-critical — fail silently
    }
  };

  const submitLead = useCallback(async (leadJson: string, transcript: string, partial = false) => {
    // Don't downgrade: skip partials once complete has been sent or another partial already sent
    if (leadSentRef.current === "complete") return;
    if (leadSentRef.current === "partial" && partial) return;
    try {
      const lead = JSON.parse(leadJson);
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, transcript, partial }),
      });
      leadSentRef.current = partial ? "partial" : "complete";
      if (!partial) setLeadComplete(true);
    } catch {
      // Non-critical
    }
  }, []);

  // Fallback: when the chat closes without a lead being sent, salvage the
  // conversation as a partial lead so the team can still follow up — but only
  // if the customer left at least one usable form of contact (email or phone).
  // If there's no way to reach them, the chat is discarded. Only fires if no
  // lead (partial or complete) was already sent.
  useEffect(() => {
    if (isOpen) return;
    if (leadSentRef.current !== "none") return;
    const msgs = messagesRef.current;
    if (msgs.length < 2) return;

    const userText = msgs
      .filter((m) => m.role === "user")
      .map((m) => m.content)
      .join("\n");
    if (!userText.trim()) return;

    const emailMatch = userText.match(/[\w.+-]+@[\w-]+\.[\w.-]+/);
    const phoneMatch = userText.match(/(\+?\d[\d\s().-]{7,}\d)/);
    if (!emailMatch && !phoneMatch) return;

    const lang = languageRef.current;
    const transcript = msgs
      .map((m) => `${m.role === "user" ? "Customer" : "VTM AI"}: ${m.content}`)
      .join("\n\n");
    const salvaged = {
      name: "",
      company: "",
      rut: "",
      email: emailMatch ? emailMatch[0] : "",
      phone: phoneMatch ? phoneMatch[0].trim() : "",
      metalworkingType: "",
      materials: "",
      thickness: "",
      dimensions: "",
      volume: "",
      currentEquipment: "",
      timeline: "",
      machinesOfInterest: "",
      language: lang,
    };
    submitLead(JSON.stringify(salvaged), transcript, true);
  }, [isOpen, submitLead]);

  // Extract a JSON object that follows a marker in a stream of text
  const extractMarkerJson = (text: string, marker: string): string | null => {
    const idx = text.indexOf(marker);
    if (idx === -1) return null;
    const start = idx + marker.length;
    let depth = 0;
    let inString = false;
    let escape = false;
    for (let i = start; i < text.length; i++) {
      const ch = text[i];
      if (escape) { escape = false; continue; }
      if (ch === "\\") { escape = true; continue; }
      if (ch === '"') { inString = !inString; continue; }
      if (inString) continue;
      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) return text.slice(start, i + 1);
      }
    }
    return null;
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: mergeForApi(newMessages).map((m) => ({ role: m.role, content: m.content })),
          mode,
          language,
        }),
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      let assistantText = "";
      const decoder = new TextDecoder();

      // SSE parsing
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") continue;
            try {
              const parsed = JSON.parse(data);
              const delta = parsed.delta?.text ?? parsed.delta?.content?.[0]?.text ?? "";
              if (delta) {
                assistantText += delta;
                setMessages((prev) => {
                  const updated = [...prev];
                  const last = updated[updated.length - 1];
                  if (last?.role === "assistant") {
                    updated[updated.length - 1] = { ...last, content: assistantText };
                  } else {
                    updated.push({ role: "assistant", content: assistantText });
                  }
                  return updated;
                });
              }
            } catch {
              // Skip malformed SSE lines
            }
          }
        }
      }

      // Extract and strip both markers from the visible bubble
      const partialJson = extractMarkerJson(assistantText, LEAD_PARTIAL_MARKER);
      const completeJson = extractMarkerJson(assistantText, LEAD_COMPLETE_MARKER);
      const cleanText = assistantText
        .replace(/LEAD_PARTIAL:\{[\s\S]*?\}/g, "")
        .replace(/LEAD_COMPLETE:\{[\s\S]*?\}/g, "")
        .trim();

      // If we stripped markers, update the bubble to the clean version
      if (cleanText !== assistantText.trim()) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: cleanText };
          return updated;
        });
      }

      // Split multiple questions into separate bubbles
      if (!completeJson) {
        const parts = splitQuestions(cleanText);
        if (parts.length > 1) {
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: "assistant", content: parts[0] };
            return updated;
          });
          for (let i = 1; i < parts.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 700));
            setMessages((prev) => [...prev, { role: "assistant", content: parts[i] }]);
          }
        }
      }

      const transcript = newMessages
        .map((m) => `${m.role === "user" ? "Customer" : "VTM AI"}: ${m.content}`)
        .join("\n\n");

      if (completeJson) {
        submitLead(completeJson, transcript, false);
      } else if (partialJson) {
        submitLead(partialJson, transcript, true);
      }

      // Speak the response (clean text, no markers)
      if (voiceEnabled && cleanText) speakText(cleanText, language);

    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong on my end — sorry about that. You can also reach us directly by WhatsApp or phone if you'd like to continue.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const toggleVoiceInput = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }
    const SpeechRecognitionCtor = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!SpeechRecognitionCtor) {
      alert("Speech recognition is not supported in your browser. Please use Chrome or Edge.");
      return;
    }
    const recognition = new SpeechRecognitionCtor();
    recognition.lang = "es-CL";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const transcript = Array.from(e.results as unknown as SpeechRecognitionResult[])
        .map((r: SpeechRecognitionResult) => r[0].transcript)
        .join("");
      setInput(transcript);
    };
    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };
    recognition.onerror = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };
    recognition.start();
    recognitionRef.current = recognition;
  };

  const displayMessages = messages.filter((m) => {
    if (m.role !== "assistant") return true;
    const stripped = m.content
      .replace(/LEAD_PARTIAL:\{[\s\S]*?\}/g, "")
      .replace(/LEAD_COMPLETE:\{[\s\S]*?\}/g, "")
      .trim();
    return stripped.length > 0;
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="VTM AI Sales Assistant"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 mt-auto md:mt-0 md:my-auto md:mx-auto md:w-full md:max-w-2xl h-[90vh] md:h-[80vh] flex flex-col bg-[#171717] border border-white/10 md:rounded-none shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-vtm-red rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Benjamin</p>
              <p className="text-white/40 text-xs">VT Maquinarias — Representante de Ventas</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Voice output toggle */}
            <button
              onClick={() => setVoiceEnabled((v) => !v)}
              className={`p-2 rounded-full transition-colors ${voiceEnabled ? "text-vtm-red" : "text-white/30 hover:text-white/60"}`}
              title={voiceEnabled ? "Disable voice output" : "Enable voice output"}
              aria-label={voiceEnabled ? "Disable voice output" : "Enable voice output"}
              aria-pressed={voiceEnabled}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 text-white/30 hover:text-white transition-colors"
              aria-label="Close assistant"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4" role="log" aria-live="polite">
          {displayMessages.map((msg, i) => {
            const isAssistant = msg.role === "assistant";
            const displayContent = msg.content
              .replace(/LEAD_PARTIAL:\{[\s\S]*?\}/g, "")
              .replace(/LEAD_COMPLETE:\{[\s\S]*?\}/g, "")
              .trim();
            if (!displayContent) return null;

            return (
              <div key={i} className={`flex gap-3 ${isAssistant ? "" : "flex-row-reverse"}`}>
                {isAssistant && (
                  <div className="w-7 h-7 bg-vtm-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                    isAssistant
                      ? "bg-white/8 text-white/90 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
                      : "bg-vtm-red text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl ml-auto"
                  }`}
                >
                  {isAssistant ? renderHighlighted(displayContent) : displayContent}
                </div>
              </div>
            );
          })}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-vtm-red rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
              <div className="bg-white/8 px-4 py-3 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
                <div className="flex gap-1 items-center h-4">
                  {[0, 150, 300].map((delay) => (
                    <div
                      key={delay}
                      className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Lead complete message */}
          {leadComplete && (
            <div className="bg-vtm-red/10 border border-vtm-red/30 px-4 py-3 text-vtm-red text-sm rounded">
              ✓ Your information has been sent to our team. You&apos;ll hear from us within one business day.
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-6 py-4 border-t border-white/10 flex-shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex gap-2 items-end"
          >
            <div className="flex-1 flex items-center bg-white/8 border border-white/10 focus-within:border-white/30 transition-colors rounded-lg px-4 py-2.5">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={language === "es" ? "Escribe tu respuesta..." : "Type your reply..."}
                className="flex-1 bg-transparent text-white text-sm placeholder-white/30 focus:outline-none"
                disabled={isLoading}
                aria-label="Message input"
              />
              {/* Voice input button */}
              <button
                type="button"
                onClick={toggleVoiceInput}
                className={`ml-2 flex-shrink-0 transition-colors ${
                  isListening ? "text-vtm-red animate-pulse" : "text-white/30 hover:text-white/60"
                }`}
                aria-label={isListening ? "Stop listening" : "Start voice input"}
                aria-pressed={isListening}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z" />
                </svg>
              </button>
            </div>

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="flex-shrink-0 bg-vtm-red text-white px-4 py-2.5 rounded-lg disabled:opacity-40 hover:bg-vtm-red/90 transition-colors"
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
          <p className="text-white/20 text-xs mt-2 text-center">
            Asistente con IA · Las respuestas pueden variar · Para especificaciones, solicite una cotización formal
          </p>
        </div>
      </div>
    </div>
  );
}
