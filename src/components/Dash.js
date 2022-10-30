import React from 'react'

import '../styles/Dash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSmog, faCloudRain, faSun } from '@fortawesome/free-solid-svg-icons'

const WEATHER = {
  Clouds : faCloud,
  Fog: faSmog,
  Mist: faSmog,
  Rain: faCloudRain,
  Clear: faSun
}

export default function Dash({infoCity}) {

  const findWeatherIcon = (weatherDesc) => {
    return WEATHER[weatherDesc]
  }

  const KelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15)

  return (
    <>
        {infoCity ?
        <div className='dash'> 
          <FontAwesomeIcon icon={findWeatherIcon(infoCity.weather[0].main)} size='6x'/>
          <div>
            <h2>{infoCity.name}</h2>
            <h3>{infoCity.weather[0].main}</h3>
            <h3>Humidity {infoCity.main.humidity} %</h3>
            <h3>Wind {infoCity.wind.speed} km/h</h3>
          </div>
          <div>
            <h2>{KelvinToCelsius(infoCity.main.temp)} °C</h2>
            <h3>Min {KelvinToCelsius(infoCity.main.temp_max)} °C</h3>
            <h3>Max {KelvinToCelsius(infoCity.main.temp_min)} °C</h3>
            <h3>Feels like {KelvinToCelsius(infoCity.main.feels_like)} °C</h3>
          </div>
        </div>: '' }
     
    </>
  )
}
