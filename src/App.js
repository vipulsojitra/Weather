import React, { useState, useEffect } from "react";
import {
  Header,
  Loader,
  Warning,
  WeatherAndForecast,
} from "./components/index";

import { getCoordinatesOfAddress } from "./services/auth";

import "./styles/App.css";

const App = () => {
  const [weatherAndForecastInformation, setWeatherAndForecastInformation] =
    useState({});
  const [error, setError] = useState({ isError: true, message: "" });
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState("");

  const findCity = (val) => {
    setAddress(val);
  };

  useEffect(() => {
    if (address === "") return;

    setLoading(true);
    getCoordinatesOfAddress(address)
      .then((res) => {
        setWeatherAndForecastInformation(res.data);
        setLoading(false);
        setError({ isError: false });
      })
      .catch((error) => {
        console.log("error", error.response.data.message);
        setLoading(false);
        setError({ isError: true, message: error.response.data.message });
      });
  }, [address]);

  return (
    <div className="App">
      <div className="innerDiv">
        <Header findCity={findCity} />
        {loading ? (
          <Loader />
        ) : error.isError ? (
          <Warning errorMessage={error.message} />
        ) : (
          <WeatherAndForecast weatherInfo={weatherAndForecastInformation} />
        )}
      </div>
    </div>
  );
};
export default App;
