import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StadiumMap from "./StadiumMap";
import TypeArea from "./TypeArea";
import useShuffle from "@hooks/useShuffle";
import Loading from "@components/common/Loading";
import { supabase } from "@lib/supabase";


const Stadium = () => {
  const [stadiumList, setStadiumList] = useState([]);
  const { leagueInfo } = useParams();
  const { current, next, currentStage, stage } = useShuffle({ items: stadiumList });

  
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
              league_id, tier, club, stadium_name, latitude, longitude
            `)
          .eq("league_id", league.id);
        
        
        if (stadiumsError) throw stadiumsError;

        setStadiumList(stadiums);

      } catch (err) {
        console.error("ERROR OCCUR: ", err);
        throw err;
      }
    };

    fetchStadiumList();
  }, [leagueInfo]);

  if (stadiumList.length === 0 || current === undefined) return <Loading />;
  

  return (
    <div className="relative h-[80%] w-full overflow-hidden rounded-2xl">
      <StadiumMap
        latitude={current.latitude}
        longitude={current.longitude}
        club={current.club}
      />
      <TypeArea
        stadiumName={current.stadium_name}
        onNext={next}
        currentStage={currentStage}
        stage={stage}
        leagueInfo={leagueInfo}
        leagueId={current.league_id}
      />
    </div>
  )
}

export default Stadium;