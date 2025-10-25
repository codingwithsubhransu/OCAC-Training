import React, { useState } from "react";
import "./App.css";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; 

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name!");
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === "404") {
        setError("City not found!");
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      setError("Error fetching weather data!");
    }
  };

  return (
    <div className="app">
      <div className="weather-card">
        <h1 className="title">🌤️ Weather App</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}>Search</button>
        </div>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <h3>{Math.round(weather.main.temp)}°C</h3>
            <p className="desc">{weather.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
