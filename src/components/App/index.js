import React from 'react';

import ComboMapListFilters from '../ComboMapListFilters/'
import { features } from "../../data/falls.json";

import './index.css'

const initialMapValues = {
  latitude: 51.505,
  longitude: -0.09,
  zoom: 13
};

const normalizedData = features.map(({ properties }) => {
  const {lat_y: latitude, long_x: longitude, ...props} = properties
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
      <ComboMapListFilters data={normalizedData} initialMapValues={initialMapValues} value={{}} handleChange={() => {}}/>
    </div>
  );
}


export default App;
