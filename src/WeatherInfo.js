import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p className="mt-2 condition-description text-capitalize">
        {props.data.condition}
        <span>💧 {props.data.humidity}%</span>{" "}
        <span>💨 {props.data.wind}km/h</span>
      </p>

      <div className="d-flex mt-2 mb-2 temperature-box">
        <div className="temperature-inner-box">
          <img src={props.data.iconUrl} alt={props.data.iconAlt} />
        </div>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
    </div>
  );
}
