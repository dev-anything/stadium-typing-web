import { useEffect, useState } from "react"

import StadiumMap from "@components/StadiumMap"
import StadiumSelector from "@components/StadiumSelector"
//import Test from "@components/Test"
import TypeArea from "@components/TypeArea"
import Home from "@components/Home"

import allStadium from "@data/main.json";
import eplStadiumList from "@data/epl.json";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index"




const App = () => {
  const [stadium, setStadium] = useState("Wembley Stadium");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    const found = eplStadiumList.find(s => s.stadium === stadium);
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
      {/*<h1>{stadium}</h1>
      <StadiumMap
        latitude={latitude}
        longitude={longitude}
        stadiumName={stadium}
      />
      <TypeArea onChange={setStadium} />*/}


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </>
  )
}

export default App
