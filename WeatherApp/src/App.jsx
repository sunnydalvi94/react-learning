import { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeather = async () => {
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      setWeather(data);
    } catch (error) {
      alert(error.message);
      setWeather(null);
    }
  };

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>🌡️ Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
          <p>🌦️ Weather: {weather.weather[0].description}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
