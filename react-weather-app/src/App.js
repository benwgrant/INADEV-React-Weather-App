import './App.css';
import React, { useState } from 'react';

function App() {
  const [zipCode, setZipCode] = useState('');

  const handleInputChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Zip Code:', zipCode);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="zipCode">Enter Zip Code:</label>
        <input 
          type="text" 
          id="zipCode" 
          value={zipCode} 
          onChange={handleInputChange} 
          placeholder="Zip Code" 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

