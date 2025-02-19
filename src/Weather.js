import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      condition: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      iconAlt: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2394045tebc4f1e4ea3820407e9abod9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <p>
          {" "}
          <FormattedDate date={weatherData.date} />
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            className="searchInput"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="searchButton" />
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={city} />
      </div>
    );
  } else {
    search();
    return (
      <div className="d-flex justify-content-center">
        <Audio
          height="80"
          width="80"
          radius="9"
          color="#f4434c"
          ariaLabel="loading"
        />
      </div>
    );
  }
}
