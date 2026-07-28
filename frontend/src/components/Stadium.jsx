import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StadiumMap from "@components/StadiumMap";
import TypeArea from "@components/TypeArea";
import useShuffle from "@hooks/useShuffle";
import { allStadiums, stadiumsByLeague } from "@data";
import Countdown from "@components/Countdown";
import Stopwatch from "@components/Stopwatch";
import Progress from "@components/Progress";
import useTypingStats from "@hooks/useTypingStats";
import StatDisplay from "@components/StatDisplay";


const Stadium = () => {
  const [targetCount, setTargetCount] = useState();
  const [millis, setMillis] = useState(0);
  const [isCountdowning, setIsCountdowning] = useState(true);
  const { leagueInfo } = useParams();
  const { current, next, currentStage, stage } = useShuffle({
    items: leagueInfo == "random" ? allStadiums : stadiumsByLeague[leagueInfo]
  });
  const { typed, handleInput, isComplete, wpm, accuracy } = useTypingStats({
    target: current.stadium
  });
  //console.log(current.stadium);
  console.log(typed);
  
  useEffect(() => {
    const old = Date.now();
    const total = 6000;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = now - old;
      
      const remain = total - diff;
      const remainSec = Math.ceil(remain / 1000);
      
      if (remainSec <= 0)
      {
        setTargetCount(0);
        setIsCountdowning(false);
        clearInterval(timer);
      }
      else
        {
          setTargetCount(remainSec);
        }
        
      }, 1000);
    }, []);
      
  if (!current) return null;

  return (
    <div className="relative h-[80%] w-full overflow-hidden rounded-2xl">
    {/*<div className="relative flex gap-4 overflow-hidden h-140 bg-[#0B1F17] p-4 text-[#F4F5F0] md:flex-row md:gap-6 md:p-6">*/}
      <StadiumMap
        latitude={current.latitude}
        longitude={current.longitude}
        stadiumName={current.stadium}
      />
      <TypeArea
        stadiumName={current.stadium}
        onComplete={next}
        currentStage={currentStage}
        stage={stage}
        onBlocked={isCountdowning}
        millis={millis}
        leagueInfo={leagueInfo}
        onHandleInput={handleInput}
        accuracy={accuracy}
        wpm={wpm}
        
        stopwatch={<Stopwatch onWaiting={isCountdowning} setMillis={setMillis} millis={millis} />}
        progress={<Progress currentStage={currentStage} stage={stage}/>}
        statDisplay={<StatDisplay wpm={wpm} accuracy={accuracy}/>}
      />

      <Countdown isActive={isCountdowning} count={targetCount} />

    </div>
  )
}

export default Stadium;