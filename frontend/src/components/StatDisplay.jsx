const StatDisplay = ({ wpm, accuracy }) => {
  return (
    <span className="flex items-center gap-2 font-mono text-xs tabular-nums">
      <span className="text-[#3CCB6F]">
        {wpm}<span className="ml-0.5 text-[8px] text-[#5C6F65]">WPM</span>
      </span>
      <span className="text-[#5C6F65]">·</span>
      <span className="text-[#FFB454]">
        {accuracy}<span className="ml-0.5 text-[8px] text-[#5C6F65]">%</span>
      </span>
    </span>
  );
}

export default StatDisplay;