const Stadium = () => {
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
      <h1>{stadium}</h1>
      <StadiumMap
        latitude={latitude}
        longitude={longitude}
        stadiumName={stadium}
      />
      <TypeArea onChange={setStadium} />

    </>
  )
}

export default Stadium;