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

  return (
    <div className="weather-widget">
      <h2>Weather for {zipcode}</h2>
      <div className="weather-details">
        <div className="weather-column">
          <h3>Temperature</h3>
          <p>{temperature} °F<br />
          (Feels Like {apparent_temperature} °F)
          </p>
          {/* Where I can add more data */}
        </div>
        <div className="weather-column">
          <h3>Wind</h3>
          <p>{windSpeed} MPH<br />
            (Gusts up to {gusts} MPH)
          </p>
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
