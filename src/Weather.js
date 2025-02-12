import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Weather">
      <p>Tuesday 5:05pm</p>
      <form action="">
        <input
          type="search"
          placeholder="Enter a city.."
          className="searchInput"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
      <h1 className="city">Tokyo</h1>
      <p className="condition-description">Mostly Cloudy</p>

      <div className="d-flex temperature-box">
        <div className="inner-box">🌥️</div>
        <div className="inner-box">
          28<span className="temperature-unit">°C</span>
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
              45<span className="conditions-unit">%</span>
            </li>
          </ul>
          <ul className="col-1 pt-1 pb-2">
            <li className="conditions-icon">💨</li>
            <li>
              12<span className="conditions-unit">km/h</span>
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
