import React, { useEffect, useState } from 'react'
import { myAPIKey } from './Key'
const WeatherCard = () => {
  const [loaded, setloaded] = useState(false);
  const [weatherData, setWeatherData] = useState({
    name: "",
    region: "",
    temp_c: "",
    text: "",
    icon: ""
  });
  const [cityName, setcityName] = useState("");

  const getWeatherData = async () => {
    const myReq = await fetch(`http://api.weatherapi.com/v1/current.json?key=${myAPIKey}&q=${weatherData.name}&aqi=no`)
    const res = await myReq.json();
    const { location: { name, region }, current: { temp_c, condition: { text, icon } } } = res
    setWeatherData((data) => {
      return {
        ...data,
        name,
        region,
        temp_c,
        text,
        icon
      }
    })
  }
  useEffect(() => {
    console.table(weatherData)
  }, [weatherData])

  const handleLoading = async () => {
    setloaded(true)
    console.log("current weather data"+ weatherData)
    await getWeatherData(weatherData.name)
  }
  const cityUpdater = (e) => {
    // setcityName(e.target.value)
    setWeatherData({
      ...weatherData,
      name: e.target.value
    })

  }
  return (
    loaded ? (
      <div>
        <input type="text" value={weatherData.name} onChange={cityUpdater} />
        <h1>Temprature:{" " + weatherData.temp_c + " °C"}</h1>
        <h2>City Name: {weatherData.name}</h2>
        <h2>State: {weatherData.region}</h2>
        <h3>Current Weather Condition: {weatherData.text}</h3>
        <img src={weatherData.icon} alt="Weather Icon" />
        <button onClick={getWeatherData}>Get Weather</button>
      </div>)
      : (
        <div>
          <h3>Weather data is empty</h3>
          <button onClick={handleLoading}>Get Started</button>
        </div>
      )
  )
}

export default WeatherCard