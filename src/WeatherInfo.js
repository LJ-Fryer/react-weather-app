import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <p className="condition-description text-capitalize">
        {props.data.condition}
      </p>

      <div className="d-flex temperature-box">
        <div className="temperature-inner-box">
          <img src={props.data.iconUrl} alt={props.data.iconAlt} />
        </div>
        <div className="temperature-inner-box">
          {props.data.temperature}
          <span className="temperature-unit">°C</span>
        </div>
      </div>

      <div>
        <div className="row">
          <ul className="col-1 pt-1 pb-2 conditions-box-left">
            <li className="conditions-icon">{""}</li>
            <li>{""}</li>
          </ul>
          <ul className="col-1 pt-1 pb-2">
            <li className="conditions-icon">☂️</li>
            <li>
              15<span className="conditions-unit">%</span>
            </li>
          </ul>
          <ul className="col-1 pt-1 pb-2">
            <li className="conditions-icon">💧</li>
            <li>
              {props.data.humidity}
              <span className="conditions-unit">%</span>
            </li>
          </ul>
          <ul className="col-1 pt-1 pb-2">
            <li className="conditions-icon">💨</li>
            <li>
              {props.data.wind}
              <span className="conditions-unit">km/h</span>
            </li>
          </ul>
          <ul className="col-1 pt-1 pb-2 conditions-box-right">
            <li className="conditions-icon">{""}</li>
            <li>{""}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
