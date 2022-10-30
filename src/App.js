import { useState } from 'react';
import './App.css';
import Browser from './components/Browser';
import Dash from './components/Dash';


function App() {

  const [infoByCity, setInfoByCity] = useState()

  const onLoadWeatherInfo = (weatherInfo) => {
    setInfoByCity(weatherInfo)
  }

  return (
    <div className='App'>
      <h1 className='center'>Weather app</h1>
      <label className='block center' htmlFor="city">Type a city name, state code or country code</label>
      <Browser onLoadWeatherInfo={onLoadWeatherInfo} />
      <Dash infoCity={infoByCity}/>
    </div>
  );

}

export default App;
