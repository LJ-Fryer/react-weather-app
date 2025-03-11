import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  const [unit, setUnit] = useState("celsius");
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{props.celsius}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} rel="noopener noreferrer">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span>{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius} rel="noopener noreferrer">
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
