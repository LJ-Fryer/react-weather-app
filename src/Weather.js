import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      iconAlt: response.data.condition.icon,
    });
  }

  if (weatherData.ready) {
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
        <h1 className="city">{weatherData.city}</h1>
        <p className="condition-description text-capitalize">
          {weatherData.condition}
        </p>

        <div className="d-flex temperature-box">
          <div className="inner-box">
            <img src={weatherData.iconUrl} alt={weatherData.iconAlt} />
          </div>
          <div className="inner-box">
            {weatherData.temperature}
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
                {weatherData.humidity}
                <span className="conditions-unit">%</span>
              </li>
            </ul>
            <ul className="col-1 pt-1 pb-2">
              <li className="conditions-icon">💨</li>
              <li>
                {weatherData.wind}
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
  } else {
    const apiKey = "2394045tebc4f1e4ea3820407e9abod9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="d-flex justify-content-center">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#a224e1"
          ariaLabel="loading"
        />
      </div>
    );
  }
}
