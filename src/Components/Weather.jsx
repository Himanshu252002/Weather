import React, { useState } from "react";
import "./Weather.css";
import clear_icon from "../Assest/clear.png";
import cloud_icon from "../Assest/cloud.png";
import drizzle_icon from "../Assest/drizzle.png";
import humidity_icon from "../Assest/humidity.png";
import rain_icon from "../Assest/rain.png";
import search_icon from "../Assest/search.png";
import snow_icon from "../Assest/snow.png";
import wind_icon from "../Assest/wind.png";

const Weather = () => {
  let api_key = "87b750ca50beb922ef903b49870200ed";

  const [vicon, setVicon] = useState(cloud_icon);
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity");
    const wind = document.getElementsByClassName("wind");
    const temp = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temp[0].innerHTML = Math.floor(data.main.temp) + " °c";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setVicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setVicon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setVicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setVicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setVicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setVicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setVicon(snow_icon);
    } else {
      setVicon(clear_icon);
    }
  };
  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder="Search" />
          <div className="search-icon" onClick={() => search()}>
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="weather-image">
          <img src={vicon} alt="" />
        </div>
        <div className="weather-temp">24°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="wind">18 Km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
