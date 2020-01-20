import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

const MapMarkers = ({ initialMapValues: {latitude, longitude, zoom}, data }) => {
  const position = [latitude, longitude];
  return (
    <LeafletMap
      center={position}
      zoom={zoom}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      */
      <MarkerClusterGroup>
        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
      </MarkerClusterGroup>
      <MarkerClusterGroup>
        {data
          .map(({latitude, longitude}, index) => (
            <Marker key={index} position={[latitude, longitude]} />
          ))}
      </MarkerClusterGroup>
    </LeafletMap>
  );
};

export default MapMarkers;
