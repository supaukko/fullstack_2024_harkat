import React, { useState, useEffect } from "react";
import weatherService from '../services/weather'

const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY
const iconBaseUrl = 'http://openweathermap.org/img/w';

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city) {
      weatherService.get(city, weatherApiKey).then((response) => {
        setWeather(response);
      })
    }
    else {
      setWeather(null)
    }
  }, [city]);

  return (
    <>
      {
      weather &&
      <>
        <h2>Weather in {city}</h2>
        <div>
          <b>temperature </b>{weather.main.temp} Celcius
        </div>
        <div>
          <img
            src={`${iconBaseUrl}/${weather.weather[0].icon}.png`}
            alt={weather.description}
            width="100"
            height="100"
          ></img>
        </div>
        <div>
          <b>wind</b> {weather.wind.speed} m/s
        </div>
      </>
      }
    </>
  )
}

export default Weather;
