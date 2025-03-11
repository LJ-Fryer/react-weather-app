import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="mt-2 justify-content-center condition-description">
        <span className="text-capitalize">{props.data.condition}</span>{" "}
        <span>💧 {props.data.humidity}%</span>{" "}
        <span>💨 {props.data.wind}km/h</span>
      </div>

      <div className="d-flex mt-2 mb-2 temperature-box">
        <div>
          <img src={props.data.iconUrl} alt={props.data.iconAlt} />
        </div>
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
    </div>
  );
}
