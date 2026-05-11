export function HeroHeadline({ text }: { text: string }) {
  return (
    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.22em]"
          style={{
            animation: "heroWordIn 0.65s cubic-bezier(0.215,0.61,0.355,1) both",
            animationDelay: `${0.15 + i * 0.075}s`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}
