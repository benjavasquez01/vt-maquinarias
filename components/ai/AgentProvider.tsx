"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { AISalesAgent } from "./AISalesAgent";

type AgentMode = "quote" | "demo";

interface AgentContextValue {
  openAgent: (mode?: AgentMode) => void;
  closeAgent: () => void;
}

const AgentContext = createContext<AgentContextValue>({
  openAgent: () => {},
  closeAgent: () => {},
});

export function useAgent() {
  return useContext(AgentContext);
}

export function AgentProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AgentMode>("quote");

  const openAgent = useCallback((m: AgentMode = "quote") => {
    setMode(m);
    setIsOpen(true);
  }, []);

  const closeAgent = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Listen for custom events from non-React contexts (e.g., WhatsApp button fallback)
  useEffect(() => {
    const handler = (e: CustomEvent<{ mode?: AgentMode }>) => {
      openAgent(e.detail?.mode ?? "quote");
    };
    window.addEventListener("vtm:open-agent" as string, handler as EventListener);
    return () => window.removeEventListener("vtm:open-agent" as string, handler as EventListener);
  }, [openAgent]);

  return (
    <AgentContext.Provider value={{ openAgent, closeAgent }}>
      {children}
      <AISalesAgent isOpen={isOpen} onClose={closeAgent} mode={mode} />
    </AgentContext.Provider>
  );
}
