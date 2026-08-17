const Countdown = ({ isActive, count }) => {
  if (!isActive) return;

  return (
    <div className="absolute inset-0 z-1000 flex items-center justify-center rounded-2xl bg-black/50">
        
      <div className="flip-stage flex flex-col items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#9CB0A6]">
          KICK OFF IN
        </span>
        <span
          key={count}
          className="flip-tile-small font-display text-6xl font-bold text-[#FFB454]"
        >
          {count}
        </span>
      </div>
    </div>
  );
}

export default Countdown;