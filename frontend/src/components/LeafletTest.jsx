import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"
import L from 'leaflet'


const stadiumIcon = L.divIcon({
  html: `<div style="font-size: 28px;">⚽</div>`,
  className: '', // 기본 Leaflet 클래스(회색 배경 박스) 제거용, 비워두는 게 핵심
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})

const LeafletTest = ( { latitude, longitude, stadiumName } ) => {
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={stadiumIcon}>
        <Popup>{stadiumName}</Popup>
      </Marker>
    </MapContainer>
  );

}

export default LeafletTest