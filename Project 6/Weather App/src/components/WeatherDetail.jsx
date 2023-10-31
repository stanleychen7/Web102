import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './WeatherDetail.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const WeatherDetail = () => {
  const {date, units} = useParams();

  const [lat,setLat] = useState(null);
  const [long, setLong] = useState(null);

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    const getWeatherDetails = async () => {
      if (lat && long) {
        try {
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&dt=${date}&appid=${API_KEY}&units=${units}`;

          const response = await axios.get(apiUrl);

          const mainData = response.data.main;

          setWeatherData(mainData);
        } catch (error) {
          console.error('Error fetching weather details:', error);
        }
      }
    };

    getWeatherDetails();
  }, [date, units, lat, long]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather Details</h2>
      <ul>
        <li>
          Temperature: {weatherData.temp} K
          <br />
          Feels Like: {weatherData.feels_like} K
          <br />
          Min Temperature: {weatherData.temp_min} K
          <br />
          Max Temperature: {weatherData.temp_max} K
          <br />
          Pressure: {weatherData.pressure} hPa
          <br />
          Humidity: {weatherData.humidity}%
        </li>
      </ul>
    </div>
  );
};

export default WeatherDetail;
