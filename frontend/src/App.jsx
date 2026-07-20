import { useEffect, useState } from "react"

import LeafletTest from "@components/LeafletTest"
import StadiumSelector from "@components/StadiumSelector"


import europeStadiums from "@data/europe.json"
import asiaStadiums from "@data/asia.json"
import africaStadiums from "@data/africa.json"
import northcentralamericaStadiums from "@data/northcentralamerica.json"
import oceaniaStadiums from "@data/oceania.json"
import southamericaStadiums from "@data/southamerica.json"
import Test from "./components/Test"
import TypeArea from "./components/TypeArea"

const STADIUMS = [
  { id: "eu", data: europeStadiums },
  { id: "as", data: asiaStadiums },
  { id: "af", data: africaStadiums },
  { id: "na", data: northcentralamericaStadiums },
  { id: "oc", data: oceaniaStadiums },
  { id: "sa", data: southamericaStadiums },
]


const App = () => {
  const [stadium, setStadium] = useState("Wembley Stadium");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    const found = europeStadiums.find(s => s.stadium === stadium);
    console.log(found)

    if (found)
    {
      setLatitude(found.latitude);
      setLongitude(found.longitude);
      
    }
    console.log(latitude, longitude);
  }, [stadium]);

  //console.log(latitude, longitude);

  return (
    <>
      <StadiumSelector onChange={setStadium} />
      <h1>{stadium}</h1>
      <LeafletTest
        latitude={latitude}
        longitude={longitude}
        stadiumName={stadium}
      />
      <TypeArea />


      <Test />
    </>
  )
}

export default App
