import React from 'react'
import './Styles/WeatherCard.css'

const WeatherCard = ({weather, temps, isCelsius, changeUnitTemp}) => {
  return (
    <section className='weather_container'>
      <h1 className='weather_tittle'>WEATHER APP</h1>
      <div className='weather_block'>
        <img className='weather_img' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon weather"/>
      <h3 className='weather_grades'> {isCelsius ? temps?.celsius : temps?.fahrenheit} {isCelsius ? "°C" : "°F"}</h3>
      </div>
      <div className='weather_block1'>
      <h2 className='weather_city'>{weather?.name}, {weather?.sys.country}</h2>
      <ul className='weather_list'>
        <li><b className='weather_listSub'>"{weather?.weather[0].main}, {weather?.weather[0].description}"</b></li>
        <li><b className='weather_listSub'>Wind Speed:</b> {weather?.wind.speed} m/s</li>
        <li><b className='weather_listSub'>Clouds:</b> {weather?.clouds.all} %</li>
        <li><b className='weather_listSub'>Pressure:</b> {weather?.main.pressure} hPa</li>
      </ul>
      </div>
      <button className='weather_button' onClick={changeUnitTemp}> &deg;C &#8660; &deg;F</button>
    </section>
  )
}

export default WeatherCard