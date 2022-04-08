import React from "react";
import { Search } from "./index";

import "../styles/Header.css";

export const Header = ({ findCity }) => {
  return (
    <header className="Header">
      <Search findCity={findCity} />
    </header>
  );
};
