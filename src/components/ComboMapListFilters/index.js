import React, {useState, useEffect} from 'react';

import MapMarkers from '../MapMarkers/'
import FormFilters from '../FormFilters/'
import Table from '../Table/'

import _ from 'lodash'

const ComboMapListFilters = ({data: dataFromProps, initialMapValues}) => {

  const initialFilters = {
    featureclass: null,
    region: null,
    ETA: null,
    ETD: null
    
  }

  const [filters, setFilters] = useState(initialFilters)

  const classFilterValues = [...new Set(_.map(dataFromProps, 'featureclass'))]
  const regionFilterValues = [...new Set(_.map(dataFromProps, 'region'))]
  
  // console.log({classFilterValues, regionFilterValues})
  // const classCategories = [...new Set(_.map(data, 'featureclass'))]

  const handleChange = ({type, value}) => {
    setFilters({
      ...filters,
      [type]: value
    })
  }

  console.log({filters})

  const activeFilters = Object.entries(filters)
  .filter(([key,value]) => Boolean(value))
  .reduce((acc,[key,value]) => ({...acc, [key]: value}), {})

  const filteredData = dataFromProps.filter(item => {
    const filters = Object.keys(activeFilters)
    return filters.every(filter => {
      return item[filter] === activeFilters[filter]
    })
  })

  // useEffect(() => {


  //   setData(filteredData)

  // }, [data, filters])

//   console.log(data)

  return (
    <div className="ComboMapListFilters">
      <FormFilters classFilterValues={classFilterValues} regionFilterValues={regionFilterValues} handleChange={handleChange}/>
      <div className='container'>
        <div className='map'>
          <MapMarkers initialMapValues={initialMapValues} data={filteredData} />
        </div>
        <div className='table'>
          <Table data={filteredData}/>
        </div>
      </div>
    </div>
  );
}


export default ComboMapListFilters;
