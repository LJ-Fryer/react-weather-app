import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1 className="city">Tokyo</h1>
      <p>Tuesday 5:05pm</p>
      <div className="row">
        <div className="col-6">🌥️</div>
        <div className="col-6">28°C</div>
      </div>
    </div>
  );
}
