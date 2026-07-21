import { useEffect, useState } from "react";
import StadiumMap from "@components/StadiumMap";
import TypeArea from "@components/TypeArea";

import eplStadiumList from "@data/epl.json";
import useShuffle from "@hooks/useShuffle";

const Stadium = () => {
  const { current, next, isFinished, progress } = useShuffle({ items: eplStadiumList });
  console.log("Stadium Com: ", current.stadium);

  return (
    <>
      <StadiumMap
        latitude={current.latitude}
        longitude={current.longitude}
        stadiumName={current.stadium}
      />
      <TypeArea stadiumName={current.stadium} onComplete={next} />
      <div>{progress}</div>
      {console.log(progress)}
    </>
  )
}

export default Stadium;