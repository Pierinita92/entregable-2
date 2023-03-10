import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import Loaders from './Components/Loaders';
import WeatherCard from './Components/WeatherCard';

const API_KEY = "e759b78a9502dcdd78f5145f13bc6e62"

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temps, setTemps] = useState();
  const [isCelsius, setIsCelsius] = useState(true);

  const succes = (e) =>{
    const newCoords = {
      lat: e.coords.latitude,
      lon: e.coords.longitude,
    }
    setCoords(newCoords);
  }

  const changeUnitTemp = () => setIsCelsius(!isCelsius)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes)
  }, [])

  useEffect(() => {
    if(coords){
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(URL)
        .then(res => {
          setTimeout(() => {
            setWeather(res.data)
            const celsius = (res.data.main.temp - 273.15).toFixed(2);
            const fahrenheit = (celsius * (9/5) + 32).toFixed(2);
            const newTemps ={ celsius, fahrenheit }
            setTemps(newTemps)
          }, 500)
        })
        .catch(err => console.log(err))
    }
  }, [coords])
  
  return (
    <div className="App">
      {
        weather ? (
          <WeatherCard
          weather={weather}
          temps={temps}
          isCelsius={isCelsius}
          changeUnitTemp={changeUnitTemp}
          />
        ) : <Loaders />
      }
    </div>
  )
}

export default App