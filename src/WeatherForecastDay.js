import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="pt-3">{day()}</div>
      <div className="mt-1 mb-1">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <div />
      <div className="pb-3 forecast-temperatures">
        <span>{maxTemperature()}</span>
        <span className="temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
