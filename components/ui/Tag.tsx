interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block border border-vtm-gray-border text-vtm-gray-mid text-[11px] font-medium tracking-wide px-3 py-1 ${className}`}
    >
      {children}
    </span>
  );
}
