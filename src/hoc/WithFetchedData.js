import React, {useState, useEffect} from 'react'
import config from './config.json'
import axios from 'axios'

const WithFetchedData = BaseComponent => props => {

  const [data, setData] = useState({})

  useEffect(() => {
    const {baseUrl, initialMapValues} = config
    axios.get(baseUrl).then(setData)
  }, [])

  const normalizedData = data && data.map(shipment => {
    const {Latitude: latitude, Longitude: longitude, ...props} = shipment
    return {
      latitude,
      longitude,
      ...props
    };
  })
  

  return (
    <BaseComponent data={normalizedData} initialMapValues={initialMapValues}/>
  )
  
}

export default WithFetchedData