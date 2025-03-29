import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Forcast from "./components/Forcast";
function App() {
  const [city, setCity] = useState("new york");
  const [text, setText] = useState("");
  const [weatherInfo, setWeatherInfo] = useState([]);
  let API_KEY = import.meta.env.VITE_API_KEY;
  const WeatherInfo = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await response.json();
      console.log(data)
      setWeatherInfo(data);
    } catch (error) {
      console.error(error);
    }
  };
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
   
      <div className="app inline-flex items-center justify-center rounded overflow-hidden shadow-lg p-4 bg-gradient-to-b from-[#03F9B8] via-[#30A2A0] to-[#565C8C]">

        <div className="weather-main">
        <h1 className="">Weather App</h1><br />
          <form className="search-box" action=""  onSubmit={(e) => handleSubmit(e)} >
            <input type="text" onChange={(e) => handleInput(e.target.value)} placeholder="Enter City.."   className="rounded-full bg-white text-black p-2 focus:ring-0 focus:border-transparent outline-none border-none h-10"/>
            <button className="rounded-full border-2 p-2 bg-white text-xs ml-2"> 🔍</button>
          </form>
          <div className="info-section-one flex flex-col items-center justify-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.list?.[0]?.weather?.[0]?.icon}@2x.png`}
              alt=""/>
            <h1>{Math.floor(weatherInfo?.list?.[0]?.main?.temp)} °C</h1>
            <h3>{weatherInfo?.city?.name}</h3>
          </div>
          <div className="info-section-two"></div>
          <Forcast city={city}/>
        </div>
      </div>
    </>
  );
}

export default App;
