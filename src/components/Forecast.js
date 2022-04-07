import React from "react";
import "../styles/Forecast.css";

export const Forecast = ({ weatherInfo }) => {
  const temp = Math.round(weatherInfo.list[0].main.temp);
  const tempFC = ((temp - 32) * 5) / 9;
  return (
    <>
      {weatherInfo.list.map((weatherInformation, index) => (
        <>
          {index == 8 ||
          index == 16 ||
          index == 24 ||
          index == 32 ||
          index == 39 ? (
            <>
              <div className="Container">
                <div className="DateTitle">
                  <h3>
                    {new Date(weatherInformation.dt * 1000).getDate() +
                      "/" +
                      (new Date(weatherInformation.dt * 1000).getMonth() + 1) +
                      "/" +
                      new Date(weatherInformation.dt * 1000).getFullYear()}
                  </h3>
                </div>
                <div className="Temperature">
                  Weather: {Math.round(tempFC)}
                  <sup className="TemperatureIcon">°</sup>
                </div>
                <div className="WindSpeed">
                  Wind: {Math.round(weatherInformation.wind.speed * 3.6)} km/h
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </>
      ))}
    </>
  );
};
