import React, { useEffect, useState } from "react";
import CountryCard from "./components/CountryCard";
import "./App.css";

const App = () => {
  const [countryFlag, setCountryFlag] = useState([]);

  useEffect(() => {
    try {
      fetch("https://xcountries-backend.azurewebsites.net/all")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setCountryFlag(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    } catch (error) {
      console.error("Error : ", error.message);
    }
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>XCOUNTRY FLAG PROJECT</h1>
      </div>
      <div className="container">
        {countryFlag.map((singleCountry) => {
          return <CountryCard singleCountry={singleCountry} />;
        })}
      </div>
    </>
  );
};

export default App;
