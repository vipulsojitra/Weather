import React from "react";
import "../styles/Weather.css";

export const Weather = ({ weatherInfo }) => {
  const unixTime = weatherInfo.list[0].dt;
  const date = new Date(unixTime * 1000);
  const temp = Math.round(weatherInfo.list[0].main.temp);
  const tempFC = ((temp - 32) * 5) / 9;
  return (
    <div className="Container">
      <div className="DateTitle">
        <h3>
          {date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear()}
        </h3>
      </div>
      <div className="WeatherInfo">
        <div>
          <div className="Temperature">
            Today's Weather {Math.round(tempFC)}
            <sup className="TemperatureIcon">°C</sup>
            {weatherInfo.list[0].weather[0].description}
          </div>
          <div>
            Wind speed: {Math.round(weatherInfo.list[0].wind.speed * 3.6)} km/h{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
