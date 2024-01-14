import React from 'react';

const WeatherData = ({ data }) => {
  if (!data) return null;

  const { temperature, windSpeed } = data;

  return (
    <div className="weather-widget">
      <h2>Weather Information</h2>
      <p><strong>Temperature:</strong> {temperature} °C</p>
      <p><strong>Wind Speed:</strong> {windSpeed} km/h</p>
    </div>
  );
};

export default WeatherData;
