import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import { useEffect } from "react";


const stadiumIcon = L.divIcon({
  html: `<div style="font-size: 28px;">⚽</div>`,
  className: '', // 기본 Leaflet 클래스(회색 배경 박스) 제거용, 비워두는 게 핵심
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})

const MapUpdater = ({ latitude, longitude }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo([latitude, longitude], map.getZoom(), {
      duration: 0.3
    })
  }, [latitude, longitude, map]);

  return null;
}

const StadiumMap = ( { latitude, longitude, stadiumName } ) => {

  if (latitude === undefined || longitude === undefined)
  {
    return <div>Loading...</div>
  }

  return (
    <MapContainer center={[latitude, longitude]} zoom={8} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
      {/*<TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />*/}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <MapUpdater latitude={latitude} longitude={longitude} />
      <Marker position={[latitude, longitude]} icon={stadiumIcon}>
        <Popup>{stadiumName}</Popup>
      </Marker>
    </MapContainer>
  );

}

export default StadiumMap;