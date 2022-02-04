import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
export const MapView = ({lat =1 , lon = 1}) => {

    console.log(`props : ${lat} , ${lon}`);
    

  return <>
<MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false} style={{ height: 375 }}>
  <TileLayer
    attribution=''
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
 </> 
};
