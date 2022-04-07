import React, { useState } from "react";
import "../styles/Search.css";

export const Search = ({ findCity }) => {
  const [currentCity, setCurrentCity] = useState("");

  const handleInputChange = (e) => {
    setCurrentCity(e.target.value);
  };

  const handleButtonClick = () => {
    if (currentCity.trim() === "") return;
    findCity(currentCity);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div className="Search">
      <input
        className="Input"
        value={currentCity}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="SearchButton" onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
};
