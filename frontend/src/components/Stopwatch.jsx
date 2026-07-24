import { useEffect, useState } from "react";


const Stopwatch = ({ onWaiting, millis }) => {
  


  if (onWaiting) return null;
  
  const minutes = String(Math.floor(millis / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((millis % 60000) / 1000)).padStart(2, '0');
  const milliSeconds = String(Math.floor((millis % 1000) / 10)).padStart(2, '0');
  

  return (
    <div>
      {minutes}:{seconds}:{milliSeconds}
    </div>
  );
}

export default Stopwatch;