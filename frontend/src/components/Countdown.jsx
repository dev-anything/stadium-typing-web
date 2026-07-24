import { useEffect } from "react";


const Countdown = ({ count }) => {
  console.log(count);
  

  return (
    //<div className={
    //  count ? 
    //    "absolute font-display"
    //    : 
    //    "absolute hidden"
    //}>
    <div className={
      count ? "font-display countdownstyle" : "hidden"
    }>
      {count}
    </div>
  );
}

export default Countdown;