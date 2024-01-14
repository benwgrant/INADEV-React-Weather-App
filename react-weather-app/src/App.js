import './App.css';
import React, { useState } from 'react';
import WeatherData from './WeatherData';
import axios from 'axios';

function App() {
  const [zipCode, setZipCode] = useState('');

  const handleInputChange = (event) => {
    setZipCode(event.target.value);
  };

  const fetchCoordinates = async (zip) => {
    const geocodingApiUrl = `https://geocode.maps.co/search?q=${zip}&api_key=65a2c015744a8957259296ehn9052f3`;
  
    try {
      const response = await axios.get(geocodingApiUrl);
      const { lat, lon } = response.data[0];
      return { latitude: lat, longitude: lon };
    } catch (error) {
      console.error('Error fetching coordinates:', error);
      return null;
    }
  };

  const testFetchCoordinates = () => {
    const testZipCode = '22947';
    console.log(fetchCoordinates(testZipCode));
  };

  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York`;
    // const weatherApiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York';
    try {
      const response = await axios.get(weatherApiUrl);
      setWeatherData(response.data);
      console.log('Weather data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const coordinates = await fetchCoordinates(zipCode);
    if (coordinates) {
      await fetchWeatherData(coordinates.latitude, coordinates.longitude);
      console.log('Weather data fetched');
    } else {
      console.log('Unable to fetch coordinates for the given zip code');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="zipCode">Enter Zip Code: </label>
        <input 
          type="text" 
          id="zipCode" 
          value={zipCode} 
          onChange={handleInputChange} 
          placeholder="Zip Code" 
        />
        <button type="submit">Submit</button>
      </form>

      {/* Test Button */}
      {/* <button onClick={testFetchCoordinates}>Test Fetch Coordinates</button> */}

      <WeatherData data={weatherData} />
    </div>
  );

}

export default App;

