import React from "react";

import "../styles/Weather.css";

export const Weather = ({ weatherInfo }) => {
  const unixTime = weatherInfo.list[0].dt;
  const date = new Date(unixTime * 1000);
  const temp = Math.round(weatherInfo.list[0].main.temp);
  const tempFC = ((temp - 32) * 5) / 9;
  return (
    <div className="Container">
      <div className="WeatherDescription">
        <img
          src={
            "https://openweathermap.org/img/wn/" +
            weatherInfo.list[0].weather[0].icon +
            ".png"
          }
          alt={weatherInfo.list[0].weather[0].main}
        />
        <div className="WeatherTitle">
          {weatherInfo.list[0].weather[0].description}
        </div>
      </div>
      <div className="WeatherInfo">
        {Math.round(tempFC)}
        <sup className="TemperatureIcon">°C</sup>
      </div>
      <div className="WeatherWind">
        <h3>
          {date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear()}
        </h3>
        <div>
          Wind: {Math.round(weatherInfo.list[0].wind.speed * 3.6)} km/h{" "}
        </div>
      </div>
    </div>
  );
};
