import { useEffect, useState } from "react";
import StadiumMap from "@components/StadiumMap";
import TypeArea from "@components/TypeArea";
import useShuffle from "@hooks/useShuffle";

import { allStadiums, stadiumsByLeague } from "@data";
import { useParams } from "react-router-dom";
import Countdown from "@components/Countdown";
import Stopwatch from "@components/Stopwatch";


const Stadium = () => {
  const [targetCount, setTargetCount] = useState();
  const [isCountdowning, setIsCountdowning] = useState(true);
  const { leagueInfo } = useParams();
  const { current, next, currentStage, stage } = useShuffle({
    items: leagueInfo == "random" ? allStadiums : stadiumsByLeague[leagueInfo]
  });

  if (!current) return null;

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
        setIsCountdowning(false);
        clearInterval(timer);
      }
      else
      {
        setTargetCount(remainSec);
      }
      
      
    }, 1000);
  }, []);

  
  

  

  return (
    <div className="flex flex-col items-center">
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
      />
      <div className="font-display">{`${currentStage} / ${stage}`}</div>
      {/*{console.log(progress)}*/}
      <Countdown count={targetCount} />
      <Stopwatch onWaiting={isCountdowning} />
    </div>
  )
}

export default Stadium;