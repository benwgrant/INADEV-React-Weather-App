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
  // Used to limit the number of API calls and update button CSS when not allowed to submit
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    setZipCode(event.target.value);
  };

  // A function to sanitize the zip code
  const sanitizeZipCode = (zip) => {
    // A regex to match a 5-digit number
    const regex = /^[0-9]{5}$/;
    return regex.test(zip) ? zip : null;
  };

  const fetchWeatherData = async (zipcode) => {
    try {
        // Fetch API data from node server (backend)
        const response = await axios.get(`http://localhost:3001/weather/${zipcode}`);
        // Set weather data to newly retrieved response. This is passed to WeatherData.js
        setWeatherData(response.data);
        console.log('Weather data:', response.data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // If button has been pressed in the last second, don't allow another submission
    if (isSubmitting) {
      console.log('Already submitting');
      return;
    }

    // Set the zip code validity state to false if provided with something other than 5 numbers
    if (!sanitizeZipCode(zipCode)) {
      console.error('Invalid zip code');
      setIsZipCodeValid(false);
      return null;
    }

    // Zip code passed the sanitize check, so set IsZipCodeValid state to true
    setIsZipCodeValid(true);

    // This is to ensure that the displayed zip code on the site is valid
    setDisplayZipCode(zipCode);

    // For purposes of "timing out" the user after submitting
    // Used a state to update the CSS of the button, rather than simple timeout
    setIsSubmitting(true);

    // Fetch the weather data
    await fetchWeatherData(zipCode);

    // Re-enable the submit button after 1 second
    setTimeout(() => {
      setIsSubmitting(false);
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
            {/* disable the "get weather" button */}
            <button type="submit" disabled={isSubmitting} className="submit-button">Get Weather</button>
          </div>
          {/* Prints error to screen when zip code does not pass sanitization */}
          {!isZipCodeValid && <div className="error-message">Invalid zip code</div>}
        </form>
      </div>

      {/* WeatherData.js component, with weatherData (the node server's weather data) passed in */}
      <WeatherData data={weatherData} zipcode={displayZipCode} />
    </div>
  );

}

export default App;

