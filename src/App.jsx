import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import './App.css'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export default function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // optional: try to fetch user's location on load
    if (!navigator || !navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        fetchWeatherByCoords(latitude, longitude)
      },
      () => {
        // user denied or unavailable - do nothing
      }
    )
  }, [])

  async function fetchWeatherByCity(city) {
    if (!API_KEY) {
      setError('API key not set. See README.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`)
      const data = await res.json()
      if (!res.ok) {
        setWeather(null)
        setError(data.message || 'City not found')
      } else {
        setWeather(data)
      }
    } catch (err) {
      setError('Failed to fetch weather')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  async function fetchWeatherByCoords(lat, lon) {
    if (!API_KEY) {
      setError('API key not set. See README.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      const data = await res.json()
      if (!res.ok) {
        setWeather(null)
        setError(data.message || 'Location not found')
      } else {
        setWeather(data)
      }
    } catch (err) {
      setError('Failed to fetch weather')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  function handleSearch(city) {
    setQuery(city)
    if (city && city.trim() !== '') fetchWeatherByCity(city.trim())
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <div className="status">Loading...</div>}
      {error && <div className="status error">{error}</div>}

      {weather && !error && <WeatherCard data={weather} />}

      <footer className="footer">API: OpenWeatherMap - store key in <code>.env</code></footer>
    </div>
  )
}
