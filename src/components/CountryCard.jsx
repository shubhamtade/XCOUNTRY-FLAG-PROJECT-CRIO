import React from "react";
import "../App.css";

const CountryCard = ({ singleCountry }) => {
  return (
    <div className="countryCard">
      <img
        src={singleCountry.flag}
        alt={singleCountry.abbr}
        style={{ width: "100px", height: "100px" }}
      />
      <h3>{singleCountry.name}</h3>
    </div>
  );
};

export default CountryCard;
