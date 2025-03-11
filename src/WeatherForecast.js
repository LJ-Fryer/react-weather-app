import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data.daily);
  }

  function apiCall() {
    let city = props.city;
    const apiKey = "2394045tebc4f1e4ea3820407e9abod9";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row m-0 grid gap-2">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-4 p-0 col-md forecast-day" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    apiCall();
    return null;
  }
}
