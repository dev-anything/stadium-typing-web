const heroWords = ["TYPE", "THE", "PITCH"];

const routine = [
  {
    n: "01",
    title: "Read the board",
    desc: "The name of your next stadium appears on screen.",
  },
  {
    n: "02",
    title: "Type it clean",
    desc: "Finish the name accurately. Mistakes are marked in red.",
  },
  {
    n: "03",
    title: "Fly to the next ground",
    desc: "The map glides smoothly to your next stop.",
  },
];

const stats = [
  { value: "120", label: "GROUNDS" },
  { value: "45", label: "NATIONS" },
  { value: "6", label: "CONTINENTS" },
];

const Home = () => {
  let letterIndex = 0;

  return (
    <div className="relative min-h-screen bg-[#0B1F17] text-[#F4F5F0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap');

        .font-display { font-family: 'Oswald', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        .flip-stage {
          perspective: 800px;
        }

        .flip-tile {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(2.1rem, 6.5vw, 4rem);
          height: clamp(2.6rem, 8vw, 5rem);
          margin: 0 3px;
          background: linear-gradient(180deg, #16332470 0%, #0d2118 100%);
          border: 1px solid #3ccb6f2a;
          border-radius: 6px;
          transform-origin: top center;
          animation: flipDown 0.7s cubic-bezier(.2,.9,.3,1) both;
        }

        .flip-tile::after {
          content: '';
          position: absolute;
          left: 0; right: 0; top: 50%;
          height: 1px;
          background: rgba(0,0,0,0.4);
        }

        @keyframes flipDown {
          0%   { transform: rotateX(-100deg); opacity: 0; }
          65%  { transform: rotateX(8deg); }
          100% { transform: rotateX(0deg); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .flip-tile { animation: none; opacity: 1; transform: none; }
        }
      `}</style>

      {/* 은은한 조명 하나만 남김 */}
      <div className="pointer-events-none absolute left-1/2 top-[-15%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#3CCB6F] opacity-[0.12] blur-[140px]" />

      <div className="relative">
        {/* 상단 바 */}
        <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <span className="font-display text-base tracking-wide">GROUND TYPE</span>
          <span className="font-mono text-[10px] tracking-widest text-[#5C6F65]">
            WORLD TOUR
          </span>
        </header>

        {/* 히어로 */}
        <main className="mx-auto max-w-3xl px-6 pb-24 pt-12 sm:pt-20">
          <div className="flip-stage flex flex-wrap items-end justify-center gap-x-3 gap-y-2">
            {heroWords.map((word, wi) => (
              <div key={wi} className="flex">
                {word.split("").map((char, ci) => {
                  const delay = letterIndex * 0.06;
                  letterIndex += 1;
                  return (
                    <span
                      key={ci}
                      className="flip-tile font-display text-2xl font-bold text-[#FFB454] sm:text-4xl"
                      style={{ animationDelay: `${delay}s` }}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          <p className="font-body mx-auto mt-8 max-w-md text-center text-sm leading-relaxed text-[#9CB0A6]">
            Type real stadium names from every continent. Get it right,
            and the map flies you to the next ground.
          </p>

          <div className="mt-8 flex justify-center">
            <button className="font-display rounded-full bg-[#3CCB6F] px-7 py-2.5 text-sm font-semibold tracking-wide text-[#0B1F17] transition hover:bg-[#4fe083] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB454]">
              Kick Off
            </button>
          </div>
        </main>

        {/* 진행 순서 — 카드/테두리 없이 심플하게 */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-3">
            {routine.map((step) => (
              <div key={step.n}>
                <span className="font-mono text-xs tracking-widest text-[#3CCB6F]">
                  {step.n}
                </span>
                <h3 className="font-display mt-2 text-base font-semibold">
                  {step.title}
                </h3>
                <p className="font-body mt-1.5 text-sm leading-relaxed text-[#8A9A91]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 통계 — 얇은 구분선만 사용 */}
        <section className="border-t border-[#3CCB6F1a]">
          <div className="mx-auto flex max-w-2xl justify-center gap-12 px-6 py-12 sm:gap-20">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-mono text-2xl font-bold text-[#3CCB6F] sm:text-3xl">
                  {s.value}
                </p>
                <p className="font-mono mt-1 text-[10px] tracking-[0.2em] text-[#5C6F65]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 푸터 — 텍스트 한 줄 */}
        <footer className="mx-auto max-w-3xl px-6 py-10 text-center">
          <p className="font-mono text-[10px] tracking-widest text-[#5C6F65]">
            Made by dev_anything_
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;