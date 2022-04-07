import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { Warning } from "./components/Warning";
import { Coordination } from "./api/coordination";
import { WeatherAndForecast } from "./components/WeatherAndForecast";
import "./styles/App.css";

const App = () => {
  const [weatherAndForecastInformation, setWeatherAndForecastInformation] =
    useState({});
  const [type, setType] = useState("warning");
  const [address, setAddress] = useState("");

  const findCity = (val) => {
    setAddress(val);
  };

  const displayWarning = () => {
    setType("warning");
  };

  useEffect(() => {
    if (address === "") return;

    setType("loading");
    Coordination(address)
      .then((res) => {
        if (res.data.city.name === undefined) {
          displayWarning();
          return;
        }
        setWeatherAndForecastInformation(res.data);
        setType("weatherAndForecast");
      })
      .catch((error) => displayWarning());
  }, [address]);

  return (
    <div className="App">
      <div className="innerDiv">
        <Header findCity={findCity} />
        {type == "loading" ? (
          <Loader />
        ) : type == "warning" ? (
          <Warning />
        ) : (
          <WeatherAndForecast weatherInfo={weatherAndForecastInformation} />
        )}
      </div>
    </div>
  );
};

export default App;
