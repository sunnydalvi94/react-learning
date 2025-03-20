import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
function App() {
  const [city, setCity] = useState("London");
  const [text, setText] = useState("");
  const [weatherInfo, setWeatherInfo] = useState([]);
  let API_KEY = import.meta.env.VITE_API_KEY;
  const WeatherInfo = async () => {
    try {
      // const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      // );
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await response.json();
      setWeatherInfo(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  // WeatherInfo();
  useEffect(() => {
    WeatherInfo();
  }, [city]);

  function handleInput(value) {
    setText(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setCity(text);
  }
  return (
    <>
      <div className="weather-main">
        <form
          className="search-box"
          action=""
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="text" onChange={(e) => handleInput(e.target.value)} />
          <button> 🔍</button>
        </form>
        <div className="info-section-one">
          <img
            src={`https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}@2x.png`}
            alt=""
          />
          <h1>{Math.floor(weatherInfo?.list?.[0]?.main?.temp)} °C</h1>
          <h3>{weatherInfo?.city?.name}</h3>
        </div>
        <div className="info-section-two">
          <p>
            {" "}
            {weatherInfo?.main?.humidity}%
            <br />
            <span>💧 Humidity </span>
          </p>
          <p>
            {weatherInfo?.wind?.speed} km/hr <br />
            <span>💨 Wind Speed </span>
          </p>
        </div>
        <div className="forcast">
          {weatherInfo?.list?.map(
            (item, index) =>
              index < 4 && (
                <div key={index}>
                  <div className="info-section-two">
                    <p>
                      {" "}
                      {item?.main?.humidity}%
                      <br />
                      <span>💧 Humidity </span>
                    </p>
                    <p>
                      {item?.wind?.speed} km/hr <br />
                      <span>💨 Wind Speed </span>
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
