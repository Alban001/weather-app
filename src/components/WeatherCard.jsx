import React, { useRef } from 'react'
import { useState } from 'react'
import './weather.css'

const WeatherCard = ({ weather, temper }) => {
  console.log(weather)
  const [celsius, setCelsius] = useState(true)
  


  const handleTemperature = () => {
    setCelsius(!celsius)
  }

  return (
    <article className='weather'>
      <h1>Aplicación del tiempo</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2>
      <section>
        <header>
          <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="weather" />
        </header>
        <article className='weather--list'>
          <h3 >{weather?.weather[0].description.toUpperCase()}</h3>
          <ul>
            <li><span>Wind Speed:</span><span>{weather?.wind.speed}</span></li>
            <li><span>Clouds:</span><span>{weather?.clouds.all}</span></li>
            <li><span>Pressure:</span><span>{weather?.main.pressure}</span></li>
          </ul>
        </article>
      </section>
      <section>
        <h2>{celsius ? `${temper?.celsius} °C` : `${temper?.fharenheit}°F`}</h2>
      </section>
      <footer>
        
        <button onClick={handleTemperature}>Change to F°/C°</button>
      </footer>
    </article>
  )
}

export default WeatherCard