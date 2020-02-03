import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

const outer = [
  [50.505, -29.09],
  [52.505, 29.09],
]

const inner = [
  [49.505, -2.09],
  [53.505, 2.09],
]

const test = [
  [59.938504253195234, 5.79803466796875],
  [60.15790959006859, 6.45721435546875]
]



const MapMarkers = ({ initialMapValues: {latitude, longitude, zoom}, data }) => {
  const position = [latitude, longitude];
  return (
    <LeafletMap
      center={position}
      zoom={zoom}
      style={{ width: "1024px", height: "100%" }}
      onZoom={data => {
        console.log(data)
        return false
      }}
      minZoom={2}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        noWrap={true}
        continuousWorld= {false}
        maxZoom={10}
        bounds= { [[-90, -180],[90, 180]] }
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      
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
