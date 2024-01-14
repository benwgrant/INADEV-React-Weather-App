import React from 'react';

const WeatherData = ({ data }) => {
  if (!data) return null;

  const temperature = data.current.temperature_2m;
  const windSpeed = data.current.wind_speed_10m;
  const humidity = data.current.relative_humidity_2m;

  return (
    <div className="weather-widget">
      <h2>Weather Information</h2>
      <div className="weather-details">
        <div className="weather-column">
          <h3>Temperature</h3>
          <p>{temperature} °F</p>
          {/* Where I can add more data */}
        </div>
        <div className="weather-column">
          <h3>Wind</h3>
          <p>{windSpeed} MPH</p>
          {/* Where I can add more data */}
        </div>
        <div className="weather-column">
          <h3>Humidity</h3>
          <p>{humidity}%</p>
          {/* Where I can add more data */}
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
