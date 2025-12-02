import React from 'react'

export default function WeatherCard({ data }) {
  // data structure from OpenWeatherMap current weather API
  const { name, sys, main, weather, wind } = data
  const icon = weather && weather[0] && weather[0].icon
  const description = weather && weather[0] && weather[0].description

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{name}, {sys?.country}</h2>
        {icon && (
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="weather-icon"
          />
        )}
      </div>

      <div className="weather-main">
        <div className="temp">{Math.round(main?.temp)}°C</div>
        <div className="desc">{description}</div>
      </div>

      <div className="weather-details">
        <div>Humidity: <strong>{main?.humidity}%</strong></div>
        <div>Wind: <strong>{wind?.speed} m/s</strong></div>
      </div>
    </div>
  )
}
