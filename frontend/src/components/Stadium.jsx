import { useEffect, useState } from "react";
import StadiumMap from "@components/StadiumMap";
import TypeArea from "@components/TypeArea";
import useShuffle from "@hooks/useShuffle";

import { allStadiums, stadiumsByLeague } from "@data";
import { useParams } from "react-router-dom";


const Stadium = () => {
  const { leagueInfo } = useParams();
  const { current, next, currentStage, stage } = useShuffle({ items: stadiumsByLeague[leagueInfo] });

  if (!current) return null;

  return (
    <>
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
      />
      <div>{`${currentStage} / ${stage}`}</div>
      {/*{console.log(progress)}*/}
    </>
  )
}

export default Stadium;