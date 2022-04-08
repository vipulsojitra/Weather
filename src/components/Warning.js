import React from "react";

import "../styles/Warning.css";

export const Warning = ({errorMessage}) => {
  return (
    <div className="Warning">
      <h2> {errorMessage} </h2>
    </div>
  );
};
