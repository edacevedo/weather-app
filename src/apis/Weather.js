const WEATHER_API_KEY = '27d951e20e32e0e452ca956320502cf2'

export const FindLatLonByName = (search) => {

    return new Promise((resolve, reject)=>{
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=2&appid=${WEATHER_API_KEY}`, {})
        .then((response)=>{
            resolve(response.json())
        })
        .catch((e)=>console.error(e.message))
    })

}

export const LoadWeatherByLatLon = (lat, lon) => {

    return new Promise((resolve, reject)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`, {})
        .then((response)=>{
            resolve(response.json())
        })
        .catch((e)=>console.error(e.message))
    })

}