  import { useState } from 'react'
  import './App.css'
  import axios from 'axios'
  import { useEffect } from 'react'
  import WeatherCard from './components/WeatherCard'

function App() {
  const [cords, setCords] = useState()
  const [weather, setweather] = useState()
  const [temp, settemp] = useState({})
 

  const succes = info => {
      setCords({
        lat: info.coords.latitude,
        long: info.coords.longitude
      })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes)
  }, [])
  
  

  useEffect(() => {
    if(cords){
      const APIKEY= 'a611433acc697a8f14a2f8f9481d4cc0'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cords.lat}&lon=${cords.long}&appid=${APIKEY}`
        axios.get(url)
        .then((res)=>{
          setweather(res.data)
          const celsius =   (res.data.main.temp - 273.15).toFixed(0)
          const fharenheit = ((9/5 * celsius) + 32).toFixed(0)
          settemp({celsius, fharenheit})
        })
        .catch(err=>  console.log(err))
    }
 
  }, [])
  
  return (
    <>
      <div className='App'> 
        <WeatherCard weather={weather} temper={temp} />
      </div>
    </>
  )
}

export default App
