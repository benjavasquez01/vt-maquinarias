export function HeroHeadline({ text }: { text: string }) {
  return (
    <h1 className="mx-auto mb-5 max-w-[22rem] font-headline text-[clamp(2.35rem,10vw,3.4rem)] font-bold leading-[1.02] tracking-normal text-white md:mb-6 md:max-w-4xl md:text-7xl">
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
