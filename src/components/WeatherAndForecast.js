import React from "react";
import { Weather, Forecast } from "./index";

import "../styles/WeatherAndForecast.css";

export const WeatherAndForecast = ({ weatherInfo }) => {
  return (
    <div className="Weather">
      <Weather weatherInfo={weatherInfo} />
      <div className="Forecast">
        <Forecast weatherInfo={weatherInfo} />
      </div>
    </div>
  );
};
