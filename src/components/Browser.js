import React, { useRef, useState } from 'react'
import { FindLatLonByName, LoadWeatherByLatLon } from '../apis/Weather'
import { v4 as uuidv4 } from 'uuid'

import '../styles/Browser.css'



export default function Browser({onLoadWeatherInfo}) {

  const [cities, setCities] = useState([])
  const inputCitiesRef = useRef()
  let timer
 

  const onKeyUpCity = ({target}) => {
    (function (value)  {
      clearTimeout(timer);
      timer = setTimeout(() => { LoadCities(value) }, 500);
    })(target.value);
  };

  const LoadCities = (value) => {
    if (value.length > 3) {
      const locationsPromise = FindLatLonByName(value)
      locationsPromise
      .then((response)=>{
        setCities(response)
      })
    }
  }

  const onChangeCity = ({ target }) => { 
    
    const selection = target.value.split(',')

    if (selection.length >= 2 ) {
      const cityName = selection[0].replaceAll(' ','')
      const country = selection.length > 2 ? selection[2].replaceAll(' ','') : selection[1].replaceAll(' ','')

      const city =  [...cities].find((city) => city.name.replaceAll(' ','') === cityName && city.country.replaceAll(' ','') ===  country)
      
      if (city) {
        const weatherInfoPremise = LoadWeatherByLatLon(city.lat, city.lon)
        weatherInfoPremise
        .then((response)=>{
          onLoadWeatherInfo(response)
        })
      }
    }
  }

  const onClearClick = () => {
    inputCitiesRef.current.value = ''
  }

  return (
    <div className='center' >
        
        <div className='cities-input-ctn'>
          <input  ref={inputCitiesRef} className='cities-input' list='cities' type="text" name='city' onChange={onChangeCity} onKeyUp={onKeyUpCity} autoComplete='off' />
          <button className='cities-clear-btn' onClick={onClearClick}>Clear</button>
        </div> 
        <datalist id='cities'>
            {
              [...cities].map((city)=> <option key={uuidv4()} value={`${city.name}, ${city.state ? city.state+', ' : ''}${city.country}`}> </option>)
            }
        </datalist>
    </div>
  )
}