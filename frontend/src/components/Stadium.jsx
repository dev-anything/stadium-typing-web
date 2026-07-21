import { useEffect, useState } from "react";
import StadiumMap from "@components/StadiumMap";
import TypeArea from "@components/TypeArea";

import eplStadiumList from "@data/epl.json";
import useShuffle from "@hooks/useShuffle";

const Stadium = () => {
  const { current, next, currentStage, stage } = useShuffle({ items: eplStadiumList });
  if (!current) return null;
  console.log("Stadium Com: ", current.stadium);

  

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