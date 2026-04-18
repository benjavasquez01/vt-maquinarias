interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className = "", light = false }: SectionLabelProps) {
  return (
    <p
      className={`text-[11px] font-semibold tracking-[0.2em] uppercase ${
        light ? "text-white/60" : "text-vtm-gray-mid"
      } ${className}`}
    >
      {children}
    </p>
  );
}
