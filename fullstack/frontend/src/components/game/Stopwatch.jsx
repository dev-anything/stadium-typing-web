import { useEffect } from "react";


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
    <span className="flex items-center gap-1.5 font-mono text-xs tabular-nums text-[#F4F5F0]">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FFB454]" />
      {minutes}:{seconds}:{milliSeconds}
    </span>
    
  );
}

export default Stopwatch;