import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
export const MapView = ({lat =1 , lon = 1}) => {

    console.log(`props : ${lat} , ${lon}`);
    

  return <>
<MapContainer className='animate__animated animate__fadeIn animate__delay-1s' center={[lat, lon]} zoom={13} scrollWheelZoom={false} style={{ height: 375 }}>
  <TileLayer
    attribution=''
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
 </> 
};
