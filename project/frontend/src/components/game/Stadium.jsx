import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StadiumMap from "./StadiumMap";
import TypeArea from "./TypeArea";
import useShuffle from "@hooks/useShuffle";
import { allStadiums, stadiumsByLeague } from "@data";
import Countdown from "./Countdown";
import Loading from "@components/common/Loading";
import { supabase } from "../../lib/supabase";


const Stadium = () => {
  const [countdown, setCountdown] = useState(5);
  const [millis, setMillis] = useState(0);
  const [isCountdowning, setIsCountdowning] = useState(true);
  const [stadiumList, setStadiumList] = useState([]);
  const { leagueInfo } = useParams();
  const { current, next, currentStage, stage } = useShuffle({ items: stadiumList });

  useEffect(() => {
    const old = Date.now();
    const total = 5000;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = now - old;
      
      const remain = total - diff;
      const remainSec = Math.ceil(remain / 1000);
      
      if (remainSec <= 0)
      {
        setCountdown(0);
        setIsCountdowning(false);
        clearInterval(timer);
      }
      else setCountdown(remainSec);
        
      }, 1000);
  }, []);
  
  useEffect(() => {    
    const fetchStadiumList = async () => {
      try {

        const { data: league, error: leagueError } = await supabase
          .from("leagues")
          .select("id")
          .eq("league_code", leagueInfo)
          .single();
        
        if (leagueError) throw leagueError;

        const { data: stadiums, error: stadiumsError} = await supabase
          .from("stadiums")
          .select(`
              id, tier, club, stadium_name, latitude, longitude
            `)
          .eq("league_id", league.id);
        
        
        if (stadiumsError) throw stadiumsError;

        setStadiumList(stadiums);

        //console.log(stadiumList);

      } catch (err) {
        console.error("ERROR OCCUR: ", err);
        throw err;
      }
    };

    fetchStadiumList();
  }, [leagueInfo]);

  if (stadiumList.length === 0 || current === undefined) return <Loading />;
  else console.log(stadiumList);

  return (
    <div className="relative h-[80%] w-full overflow-hidden rounded-2xl">
      <StadiumMap
        latitude={current.latitude}
        longitude={current.longitude}
        stadiumName={current.stadium_name}
      />
      <TypeArea
        stadiumName={current.stadium_name}
        onNext={next}
        currentStage={currentStage}
        stage={stage}
        isCountdowning={isCountdowning}
        setMillis={setMillis}
        millis={millis}
        leagueInfo={leagueInfo}
      />

      <Countdown isActive={isCountdowning} count={countdown} />

    </div>
  )
}

export default Stadium;