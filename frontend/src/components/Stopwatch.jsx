import { useEffect, useState } from "react";


const Stopwatch = ({ onWaiting, setMillis, millis }) => {

  useEffect(() => {
    if (onWaiting) return;
    
    const stopwatch = setInterval(() => {
      setMillis(prev => prev + 10);
    }, [10]);

    return () => clearInterval(stopwatch);
  }, [onWaiting]);
  


  if (onWaiting) return null;
  
  const minutes = String(Math.floor(millis / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((millis % 60000) / 1000)).padStart(2, '0');
  const milliSeconds = String(Math.floor((millis % 1000) / 10)).padStart(2, '0');
  

  return (
    <div className="absolute font-display left-1/2 -translate-x-1/2 top-4 flex items-center gap-1.5 rounded-full border border-[#3CCB6F1f] bg-[#0B1F17]/70 px-3 py-1">
      <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#3CCB6F]" />
      <span className="text-sm tabular-nums text-[#F4F5F0]">
        {minutes}:{seconds}:{milliSeconds}
      </span>
    </div>
    
  );
}

export default Stopwatch;