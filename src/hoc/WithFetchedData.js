import React, {useState, useEffect} from 'react'
import config from './config.json'
import axios from 'axios'

const WithFetchedData = BaseComponent => props => {

  const [data, setData] = useState({})

  useEffect(() => {
    const {baseUrl, initialMapValues} = config
    axios.get(baseUrl).then(setData)
  }, [])

  return (
    <BaseComponent data={data} initialMapValues={initialMapValues}/>
  )
  
}

export default WithFetchedData