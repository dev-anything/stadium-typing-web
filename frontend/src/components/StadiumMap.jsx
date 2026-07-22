import { MapContainer, TileLayer, useMap, Marker, Popup, ZoomControl } from "react-leaflet";
import L from 'leaflet';
import { useEffect } from "react";


//const stadiumIcon = L.divIcon({
//  html: `<div style="font-size: 28px;">⚽</div>`,
//  className: '', // 기본 Leaflet 클래스(회색 배경 박스) 제거용, 비워두는 게 핵심
//  iconSize: [32, 32],
//  iconAnchor: [16, 32],
//})

//const stadiumIcon = L.divIcon({
//  html: `
//    <div style="
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      width: 32px;
//      height: 32px;
//      background: #FFB454;
//      border-radius: 50%;
//      border: 2px solid #0B1F17;
//      box-shadow: 0 0 12px rgba(255, 180, 84, 0.6);
//      font-size: 16px;
//    ">⚽</div>
//  `,
//  className: '',
//  iconSize: [32, 32],
//  iconAnchor: [16, 16],
//})

//const stadiumIcon = L.divIcon({
//  html: `
//    <div style="
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      width: 30px;
//      height: 30px;
//      background: #F4F5F0;
//      border-radius: 50%;
//      box-shadow: 0 2px 8px rgba(0,0,0,0.5);
//      font-size: 15px;
//    ">⚽</div>
//  `,
//  className: '',
//  iconSize: [30, 30],
//  iconAnchor: [15, 15],
//})

const stadiumIcon = L.divIcon({
  html: `
      <div style="position: relative; width: 24px; height: 40px;">
        <!-- 원형 헤드 -->
        <div style="
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 24px; height: 24px;
          background: #FFB454;
          border-radius: 50%;
          //border: 2px solid #0B1F17;
          box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        "></div>
        <!-- 길어진 꼬리 (삼각형) -->
        <div style="
          position: absolute;
          top: 20px; left: 50%;
          transform: translateX(-50%);
          width: 0; height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 16px solid #FFB454;
        "></div>
      </div>
    `,
    className: '',
    iconSize: [24, 40],
    iconAnchor: [12, 40],   // 꼬리 끝(맨 아래)이 정확한 좌표
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
    <MapContainer
      center={[latitude, longitude]}
      zoom={6}
      zoomControl={false}
      scrollWheelZoom={false} 
      style={{ height: '500px', width: '100%' }}
      className="w-full mt-10"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors &copy; CARTO'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {/*<ZoomControl position="bottomright" />*/}
      <MapUpdater latitude={latitude} longitude={longitude} />
      <Marker position={[latitude, longitude]} icon={stadiumIcon}>
        <Popup>{stadiumName}</Popup>
      </Marker>
    </MapContainer>
  );

}

export default StadiumMap;