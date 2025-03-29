import { useState } from "react";
import { useEffect } from "react";

function Forcast({city}) {
  const [forcastInfo, setforcastInfo] = useState([]);
  let API_KEY = import.meta.env.VITE_API_KEY;
  const forcastFn = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await response.json();
      setforcastInfo(data);
    //   console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  // WeatherInfo();
  useEffect(() => {
    forcastFn();
  }, [city]);


  
  return (
    <>
      <div className="forcast pt-5">
        {forcastInfo?.list?.length > 0 &&
          forcastInfo?.list?.map(
            (item, index) =>
              index < 4 && (
                <div key={index}>
                  <div className="info-section-two">
                   <p className="text-black  rounded-full border-2 border-purple p-2 bg-white text-xs  inline "> {new Date(item?.dt_txt).toLocaleTimeString("en-US", { hour: "numeric", hour12: true })}</p> 
                    <p className="mt-3">
                      {" "}
                      {item?.main?.humidity}%
                      <br />
                      <span className="mb-20">💧 Humidity </span> <br /> <br /> 
                      {item?.wind?.speed} km/hr <br />
                      <span>💨 Wind Speed </span>
                    </p>
                  </div>
                </div>
              )
          )}
      </div>
    </>
  );
}

export default Forcast;
