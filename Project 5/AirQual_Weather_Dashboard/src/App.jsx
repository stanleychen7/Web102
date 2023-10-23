import React, { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const App = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get(`http://api.airvisual.com/v2/cities?state=New%20York&country=USA&key=${API_KEY}`);
        const citiesArray = response.data.data;
        setCities(citiesArray);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCities();
  }, []);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCitySelect = async (cityName) => {
    setSelectedCity(cityName);

    try {
      const response = await axios.get(`http://api.airvisual.com/v2/city?city=${cityName}&state=New%20York&country=USA&key=${API_KEY}`);
      const cityInfo = response.data.data;

      // Assuming that the temperature, air quality, and humidity are properties of cityInfo
      const temperature = cityInfo.tp;
      const airQuality = cityInfo.aqius;
      const humidity = cityInfo.hu;

      setCityData({ temperature, airQuality, humidity });
    } catch (error) {
      console.error('Error:', error);
      setCityData(null); // Reset city data on error
    }
  };

  const filteredCities = cities.filter(cityItem =>
    cityItem.name && searchTerm && cityItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="App">
      <h2>City Search</h2>
      <input
        type="text"
        placeholder="Search for a city"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />

      <ul>
        {filteredCities.map((cityItem, index) => (
          <li key={index} onClick={() => handleCitySelect(cityItem.name)}>
            {cityItem.name}
          </li>
        ))}
      </ul>

      {cityData && (
        <div>
          <h3>City: {selectedCity}</h3>
          <p>Temperature: {cityData.temperature} °C</p>
          <p>Air Quality: {cityData.airQuality}</p>
          <p>Humidity: {cityData.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
