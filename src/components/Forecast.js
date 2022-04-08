import React from "react";
import "../styles/Forecast.css";

export const Forecast = ({ weatherInfo }) => {
  const temp = Math.round(weatherInfo.list[0].main.temp);
  const tempFC = ((temp - 32) * 5) / 9;
  return (
    <>
      {weatherInfo.list.map((weatherInformation, index) => (
        <div key={index}>
          {index == 8 ||
          index == 16 ||
          index == 24 ||
          index == 32 ||
          index == 39 ? (
            <div className="Container">
              <div className="ForecastDescription">
                <img
                  src={
                    "https://openweathermap.org/img/wn/" +
                    weatherInfo.list[0].weather[0].icon +
                    ".png"
                  }
                  alt={weatherInfo.list[0].weather[0].main}
                />
                <div className="DescriptionTitle">
                  {weatherInfo.list[0].weather[0].description}
                </div>
              </div>
              <div className="TempTitle">
                {Math.round(tempFC)}
                <sup className="TemperatureIcon">°</sup>
              </div>
              <div className="ForecastWind">
                <h3>
                  {new Date(weatherInformation.dt * 1000).getDate() +
                    "/" +
                    (new Date(weatherInformation.dt * 1000).getMonth() + 1) +
                    "/" +
                    new Date(weatherInformation.dt * 1000).getFullYear()}
                </h3>
                Wind: {Math.round(weatherInformation.wind.speed * 3.6)} km/h
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};
