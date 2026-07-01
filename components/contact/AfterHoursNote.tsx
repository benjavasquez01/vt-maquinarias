"use client";

import { useAgent } from "@/components/ai/AgentProvider";

const TRIGGER = "asistente";

export function AfterHoursNote({ text }: { text: string }) {
  const { openAgent } = useAgent();
  const idx = text.indexOf(TRIGGER);

  const button = (
    <button
      type="button"
      onClick={() => openAgent("quote")}
      className="text-vtm-red font-semibold underline underline-offset-2 hover:text-vtm-red/80 transition-colors"
    >
      {TRIGGER}
    </button>
  );

  return (
    <p className="text-vtm-gray-mid font-body text-sm mt-3 max-w-xs">
      {idx === -1 ? (
        text
      ) : (
        <>
          {text.slice(0, idx)}
          {button}
          {text.slice(idx + TRIGGER.length)}
        </>
      )}
    </p>
  );
}
