const heroWords = ["TYPE", "THE", "PITCH"];

const tickerStadiums = [
  "WEMBLEY · LONDON",
  "CAMP NOU · BARCELONA",
  "MARACANÃ · RIO DE JANEIRO",
  "ALLIANZ ARENA · MUNICH",
  "SAN SIRO · MILAN",
  "ESTADIO AZTECA · MEXICO CITY",
  "SOCCER CITY · JOHANNESBURG",
  "SEOUL WORLD CUP · SEOUL",
];

const routine = [
  {
    n: "01",
    title: "전광판을 확인하세요",
    desc: "다음 목적지 경기장 이름이 화면에 뜹니다. 도시와 국가도 함께 표시돼요.",
  },
  {
    n: "02",
    title: "휘슬이 울리기 전에",
    desc: "정확하게 타이핑을 완료하면 기록이 즉시 측정됩니다. 오타는 빨간불로 알려드려요.",
  },
  {
    n: "03",
    title: "다음 그라운드로 비행",
    desc: "지도가 부드럽게 다음 경기장으로 이동하며, 새로운 도전이 시작됩니다.",
  },
];

const stats = [
  { value: "120", label: "GROUNDS" },
  { value: "45", label: "NATIONS" },
  { value: "6", label: "CONTINENTS" },
];

const Index = () => {
  let letterIndex = 0;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1F17] text-[#F4F5F0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap');

        .font-display { font-family: 'Oswald', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        .pitch-lines {
          background-image: repeating-linear-gradient(
            180deg,
            rgba(60, 203, 111, 0.035) 0px,
            rgba(60, 203, 111, 0.035) 48px,
            transparent 48px,
            transparent 96px
          );
        }

        .flip-stage {
          perspective: 800px;
        }

        .flip-tile {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(2.1rem, 6.5vw, 4.2rem);
          height: clamp(2.6rem, 8vw, 5.2rem);
          margin: 0 3px;
          background: linear-gradient(180deg, #16332470 0%, #0d2118 100%);
          border: 1px solid #3ccb6f33;
          border-radius: 6px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04);
          transform-origin: top center;
          animation: flipDown 0.7s cubic-bezier(.2,.9,.3,1) both;
        }

        .flip-tile::after {
          content: '';
          position: absolute;
          left: 0; right: 0; top: 50%;
          height: 1px;
          background: rgba(0,0,0,0.45);
        }

        @keyframes flipDown {
          0%   { transform: rotateX(-100deg); opacity: 0; }
          65%  { transform: rotateX(8deg); }
          100% { transform: rotateX(0deg); opacity: 1; }
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .glow {
          animation: glowPulse 6s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.28; }
          50%      { opacity: 0.5; }
        }

        .ticket-edge {
          background-image: radial-gradient(circle at 8px 0, transparent 8px, #0B1F17 8.5px);
          background-size: 20px 16px;
          background-repeat: repeat-x;
          background-position: top left;
        }

        @media (prefers-reduced-motion: reduce) {
          .flip-tile { animation: none; opacity: 1; transform: none; }
          .marquee-track { animation: none; }
          .glow { animation: none; opacity: 0.35; }
        }
      `}</style>

      {/* 잔디 라인 텍스처 (전체 배경) */}
      <div className="pitch-lines pointer-events-none absolute inset-0" />

      {/* 조명 글로우 */}
      <div className="glow pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3CCB6F] blur-[140px]" />
      <div className="glow pointer-events-none absolute right-[8%] top-[18%] h-[360px] w-[360px] rounded-full bg-[#FFB454] blur-[130px]" style={{ animationDelay: "2s" }} />

      <div className="relative">
        {/* 상단 바 */}
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg tracking-wide">⚽ GROUND&nbsp;TYPE</span>
          </div>
          <span className="font-mono text-[11px] tracking-widest text-[#7C9186]">
            WORLD TOUR EDITION
          </span>
        </header>

        {/* 히어로 */}
        <main className="mx-auto max-w-6xl px-6 pb-20 pt-8 sm:pt-16">
          <div className="flip-stage flex flex-wrap items-end justify-center gap-x-3 gap-y-2 sm:gap-x-5">
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

          <p className="font-body mx-auto mt-8 max-w-xl text-center text-[15px] leading-relaxed text-[#B9C7BF] sm:text-base">
            웸블리에서 마라카낭까지 — 전 세계 120개 경기장 이름을 타이핑하며
            지도 위를 여행하세요. 정확하게 칠 때마다 다음 그라운드로 향합니다.
          </p>

          <div className="mt-9 flex justify-center">
            <button className="font-display group relative rounded-full bg-[#3CCB6F] px-8 py-3 text-sm font-semibold tracking-wide text-[#0B1F17] shadow-[0_10px_30px_rgba(60,203,111,0.25)] transition hover:bg-[#4fe083] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB454]">
              킥오프 · 연습 시작하기
              <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
            </button>
          </div>
        </main>

        {/* 티커 (스코어보드 느낌 마퀴) */}
        <div className="border-y border-[#3CCB6F1f] bg-[#0d2118]/60 py-3">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="marquee-track">
              {[...tickerStadiums, ...tickerStadiums].map((name, i) => (
                <span
                  key={i}
                  className="font-mono mx-6 shrink-0 text-xs tracking-widest text-[#7C9186]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 매치데이 루틴 (진행 순서) */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono mb-2 text-center text-[11px] tracking-[0.3em] text-[#3CCB6F]">
            MATCHDAY ROUTINE
          </p>
          <h2 className="font-display mb-12 text-center text-2xl font-semibold sm:text-3xl">
            세 걸음이면 다음 경기장
          </h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {routine.map((step) => (
              <div
                key={step.n}
                className="rounded-2xl border border-[#3CCB6F1f] bg-[#0d2118]/50 p-6 transition hover:border-[#3CCB6F55]"
              >
                <span className="font-display text-3xl font-bold text-[#FFB454]">
                  {step.n}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="font-body mt-2 text-sm leading-relaxed text-[#9CB0A6]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 스코어보드 통계 */}
        <section className="border-t border-[#3CCB6F1f] bg-[#0d2118]/40">
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4 px-6 py-14 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-4xl font-bold text-[#3CCB6F] sm:text-5xl">
                  {s.value}
                </p>
                <p className="font-mono mt-2 text-[11px] tracking-[0.25em] text-[#7C9186]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 티켓 스텁 스타일 푸터 */}
        <footer className="ticket-edge mx-auto mt-4 max-w-3xl px-6 pb-10 pt-6 text-center">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#5C6F65]">
            ADMIT ONE · GROUND TYPE WORLD TOUR
          </p>
          <p className="font-body mt-2 text-xs text-[#5C6F65]">
            © 2026 dev_anything_. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;