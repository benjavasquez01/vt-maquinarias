interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block bg-vtm-red text-white text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1 ${className}`}
    >
      {children}
    </span>
  );
}
