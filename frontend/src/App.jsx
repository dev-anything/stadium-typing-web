import { useEffect, useState } from "react"

import LeafletTest from "./components/LeafletTest"
import StadiumSelector from "./components/StadiumSelector"


import europeStadiums from "@data/europe.json"
import asiaStadiums from "@data/asia.json"
import africaStadiums from "@data/africa.json"
import northcentralamericaStadiums from "@data/northcentralamerica.json"
import oceaniaStadiums from "@data/oceania.json"
import southamericaStadiums from "@data/southamerica.json"


const App = () => {
  const [stadium, setStadium] = useState("");
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);

  useEffect(() => {
    setStadium("Wembley Stadium");
    
  }, []);


  return (
    <>
      {/*{euStadiums.map((stadium) => {
        return (<h1 key={stadium.id}>{stadium.stadium}</h1>)
      })}*/}
      <StadiumSelector onChange={setStadium} />
      <h1>{stadium}</h1>
    </>
  )
}

export default App
