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
import Loading from "@components/Loading";


const Stadium = () => {
  const [targetCount, setTargetCount] = useState();
  const [millis, setMillis] = useState(0);
  const [isCountdowning, setIsCountdowning] = useState(true);
  const [stadiumList, setStadiumList] = useState([]);
  const { leagueInfo } = useParams();
  const { current, next, currentStage, stage } = useShuffle({ items: stadiumList });
  const { typed, handleInput, isComplete, wpm, accuracy } = useTypingStats({
    target: current?.stadium_name ?? ""
  });
  
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
    return () => clearInterval(timer);
  }, []);
  

  //useEffect(() => {
    
  //  const API_URL = import.meta.env.VITE_API_URL;
  //  //console.log(API_URL);

  //  fetch(`${API_URL}/api/league/stadiums/${leagueInfo}`)
  //  .then((res) => {
  //    if (!res.ok) {
  //      throw new Error("Failed to fetch URL");
  //    }
  //    return res.json();
  //  })
  //  .then((data) => setStadiumList(data))
  //}, [leagueInfo]);

  

  // stadiumList 가 비어 있으면 useShuffle 의 current 가 undefined 가 되므로
  // API 응답이 도착해 stadiumList 가 채워질 때까지 렌더링을 보류한다
  if (stadiumList.length === 0 || !current) return <Loading />;
  //if (!current) return null;

  return (
    <div className="relative h-[80%] w-full overflow-hidden rounded-2xl">
    {/*<div className="relative flex gap-4 overflow-hidden h-140 bg-[#0B1F17] p-4 text-[#F4F5F0] md:flex-row md:gap-6 md:p-6">*/}
      <StadiumMap
        latitude={current.latitude}
        longitude={current.longitude}
        stadiumName={current.stadium_name}
      />
      <TypeArea
        stadiumName={current.stadium_name}
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