import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import Dashboard from './components/dashboard';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  //API call for header
  useEffect(() => {
    const fetchData = async () => {
      if (lat && long) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=imperial`
          );
          if (response.data.cod === 200) {
            setData(response.data);
            console.log(response.data);
          }
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };

    fetchData();
  }, [lat, long]);

  //API Call for dashboard
  useEffect(() => {
    const fetchForecastData = async () => {
      if (lat && long) {
        try {
          const forecastResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=40&appid=${API_KEY}&units=imperial`
          );
          console.log('Forecast Response:', forecastResponse.data); // Add this line
          setForecast(forecastResponse.data.list);
        } catch (error) {
          console.error('Error fetching forecast data:', error);
        }
      }
    };
  
    fetchForecastData();
  }, [lat, long, API_KEY]); // Make sure to include API_KEY as a dependency
  

  return (
    <div className='App'>
      <CurrentWeatherCard weatherdata={data}/>
      <Dashboard forecastdata = {forecast}/>
    </div>
  );
}

export default App;
