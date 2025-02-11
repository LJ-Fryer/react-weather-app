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
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
      <h1 className="city">Tokyo</h1>
      <div className="d-flex temperature-box">
        <div className="inner-box">🌥️</div>
        <div className="inner-box">
          28<span className="temperature-unit-display">°C</span>
        </div>
      </div>

      <h5>Mostly Cloudy</h5>
      <div className="row cityConditions">
        <ul className="col-1 m-0 p-0">
          <li className="conditions-icon">☂️</li>
          <li>
            15<span className="conditions-unit">%</span>
          </li>
        </ul>
        <ul className="col-1 m-0 p-0">
          <li className="conditions-icon">💧</li>
          <li>
            45<span className="conditions-unit">%</span>
          </li>
        </ul>
        <ul className="col-1 m-0 p-0">
          <li className="conditions-icon">💨</li>
          <li>
            12<span className="conditions-unit">km/h</span>
          </li>
        </ul>
      </div>
      <footer>
        Project coded by{" "}
        <a
          href="https://lj-fryer.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          LJ Fryer
        </a>
        . Open-sourced on{" "}
        <a
          href="https://github.com/LJ-Fryer/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}
