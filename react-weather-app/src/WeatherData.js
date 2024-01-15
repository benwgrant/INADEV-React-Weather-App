import React from 'react';

const WeatherData = ({ data, zipcode }) => {
  if (!data) return null;

  const temperature = data.current.temperature_2m;
  const windSpeed = data.current.wind_speed_10m;
  const humidity = data.current.relative_humidity_2m;
  const apparent_temperature = data.current.apparent_temperature;
  const cloud_cover = data.current.cloud_cover;
  const rain = data.current.rain;
  const gusts = data.current.wind_gusts_10m;
  const code = data.current.weather_code;
  const precipitation = data.current.precipitation;
  const winddir = data.current.wind_direction_10m;
  const surface_pressure = data.current.surface_pressure;

  const weatherCodes = {
    0: "Clear sky",
    1: "Mostly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Freezing fog",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate intensity",
    55: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snow fall: Slight intensity",
    73: "Snow fall: Moderate intensity",
    75: "Snow fall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight intensity",
    81: "Rain showers: Moderate intensity",
    82: "Rain showers: Heavy intensity",
    85: "Snow showers slight intensity",
    86: "Snow showers heavy intensity",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
};

const weatherIcons = {
    0: "sun.png",
    1: "sun.png",
    2: "cloudy.png",
    3: "cloud.png",
    45: "haze.png",
    48: "haze.png",
    51: "rain.png",
    53: "rain.png",
    55: "rain.png",
    56: "hail.png",
    57: "hail.png",
    61: "rain.png",
    63: "rain.png",
    65: "rain.png",
    66: "hail.png",
    67: "hail.png",
    71: "snowy.png",
    73: "snowy.png",
    75: "snowy.png",
    77: "snowy.png",
    80: "rain.png",
    81: "rain.png",
    82: "rain.png",
    85: "snowy.png",
    86: "snowy.png",
    95: "thunderstorm.png",
    96: "thunderstorm.png",
    99: "thunderstorm.png"
};

const weatherIcon = weatherIcons[code] || 'cloudy.png';
const val = parseInt((winddir/22.5)+.5);
const directions = ["N","NNE","NE","ENE","E","ESE", "SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
const compass = directions[(val % 16)];


return (
    <div className="weather-widget">
    <img src={`/weather-icons/${weatherIcon}`} alt="Weather Icon" />
      <h2>Weather for {zipcode}: {weatherCodes[code]}</h2>
      <div className="weather-details">
        <div className="weather-box">
          <h3>Temperature</h3>
          <p>{temperature} °F<br />(Feels Like {apparent_temperature} °F)</p>
        </div>
        <div className="weather-box">
          <h3>Wind</h3>
          <p>{windSpeed} MPH {compass}<br />(Gusts up to {gusts} MPH)</p>
        </div>
        <div className="weather-box">
          <h3>Humidity</h3>
          <p>{humidity}%</p>
        </div>
        <div className="weather-box">
          <h3>Cloud Cover</h3>
          <p>{cloud_cover}%</p>
        </div>
        <div className="weather-box">
          <h3>Precipitation</h3>
          <p>{precipitation} Inches</p>
        </div>
        <div className="weather-box">
          <h3>Surface Pressure</h3>
            <p>{surface_pressure} hPa</p>
        </div>
        
      </div>
    </div>
  );
};

export default WeatherData;
