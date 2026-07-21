import { useEffect, useState } from "react"

import StadiumMap from "@components/StadiumMap"
import StadiumSelector from "@components/StadiumSelector"
//import Test from "@components/Test"
import TypeArea from "@components/TypeArea"

import allStadium from "@data/main.json";
import europeStadiums from "@data/europe.json"
import asiaStadiums from "@data/asia.json"
import africaStadiums from "@data/africa.json"
import northcentralamericaStadiums from "@data/northcentralamerica.json"
import oceaniaStadiums from "@data/oceania.json"
import southamericaStadiums from "@data/southamerica.json"

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
    const found = allStadium.find(s => s.stadium === stadium);
    //console.log(found)

    if (found)
    {
      setLatitude(found.latitude);
      setLongitude(found.longitude);
      
    }
  }, [stadium]);


  return (
    <>
      {/*<StadiumSelector onChange={setStadium} />*/}
      <h1>{stadium}</h1>
      <StadiumMap
        latitude={latitude}
        longitude={longitude}
        stadiumName={stadium}
      />
      <TypeArea onChange={setStadium} />


      {/*<Test />*/}
    </>
  )
}

export default App
