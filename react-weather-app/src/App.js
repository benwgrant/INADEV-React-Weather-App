import './App.css';
import './WeatherData.css';
import React, { useState } from 'react';
import WeatherData from './WeatherData';
import Header from './Header';
import axios from 'axios';

function App() {
  // States
  const [zipCode, setZipCode] = useState('');
  const [displayZipCode, setDisplayZipCode] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isZipCodeValid, setIsZipCodeValid] = useState(true);
  // Used to limit the number of API calls
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    setZipCode(event.target.value);
  };

  // A function to sanitize the zip code, preventing injection attacks
  const sanitizeZipCode = (zip) => {
    // A regex to match a 5-digit number
    const regex = /^[0-9]{5}$/;
    return regex.test(zip) ? zip : null;
  };

  const fetchWeatherData = async (zipcode) => {
    try {
        const response = await axios.get(`http://localhost:3001/weather/${zipcode}`);
        setWeatherData(response.data);
        console.log('Weather data:', response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        console.error(error.response.data);
    }
};
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // If button has been pressed in the last second, don't allow another submission
    if (isSubmitting) {
      console.log('Already submitting');
      return;
    }

    if (!sanitizeZipCode(zipCode)) {
      console.error('Invalid zip code');
      setIsZipCodeValid(false);
      return null;
    }

    // If valid zip code, fetch coordinates
    setIsZipCodeValid(true);

    setIsSubmitting(true);

    await fetchWeatherData(zipCode);
    setDisplayZipCode(zipCode);

    setTimeout(() => {
      setIsSubmitting(false); // Re-enable the submit button after 1 second
    }, 1000);
  };

  return (
    <div className="App">
      <Header />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="zipCode">Enter Zip Code:</label>
            <input 
              type="text" 
              id="zipCode" 
              value={zipCode} 
              onChange={handleInputChange} 
              placeholder="Zip Code" 
              className={!isZipCodeValid ? 'invalid' : ''}
            />
            <button type="submit" disabled={isSubmitting} className="submit-button">Get Weather</button>
          </div>
          {!isZipCodeValid && <div className="error-message">Invalid zip code</div>}
        </form>
      </div>

      <WeatherData data={weatherData} zipcode={displayZipCode} />
    </div>
  );

}

export default App;

