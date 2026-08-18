import { MapContainer, TileLayer, useMap, Marker, Tooltip } from "react-leaflet";
import L from 'leaflet';
import { useEffect } from "react";
import Loading from "@components/common/Loading";

const stadiumIcon = L.divIcon({
  html: `
      <div style="position: relative; width: 24px; height: 40px;">
        <!-- 원형 헤드 -->
        <div style="
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 24px; height: 24px;
          background: #000000;
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
          border-top: 16px solid #000000;
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
      duration: 0.2
    })
  }, [latitude, longitude, map]);

  return null;
}

const StadiumMap = ( { latitude, longitude, club } ) => {

  if (latitude === undefined || longitude === undefined)
  {
    return <Loading />;
  }

  return (
    <div className="absolute inset-0">
      
      <MapContainer
        center={[latitude, longitude]}
        zoom={7}
        zoomControl={false}
        scrollWheelZoom={false} 
        style={{ width: '100%', height: '100%' }}
        className="w-full relative"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapUpdater latitude={latitude} longitude={longitude} />
        
        <Marker position={[latitude, longitude]} icon={stadiumIcon}>
          <Tooltip
            className="font-display text-4"
            permanent
            direction="top"
            offset={[0, -50]}
          >
            TEAM: {club}
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );

}

export default StadiumMap;