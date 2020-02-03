import React from 'react';

import ComboMapListFilters from '../ComboMapListFilters/'
import shipments from "../../data/shipments.json";

import './index.css'



const normalizedData = shipments.map(shipment => {
  const {Latitude: latitude, Longitude: longitude, ...props} = shipment
  return {
    latitude,
    longitude,
    ...props
  };
})


function App() {
  
  return (
    <div className="App">
      <h1>My App</h1>
      <ComboMapListFilters value={{}} handleChange={() => {}}/>
    </div>
  );
}


export default App;
