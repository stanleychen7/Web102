import React from 'react';
import moment from 'moment';

const CurrentWeatherCard = ({ weatherdata }) => {
  if (!weatherdata) {
    return <p>No weather data available.</p>;
  }

  const { name, main, weather } = weatherdata;

  if (!name || !main || !weather || !weather[0] || !weather[0].description) {
    return <p>Weather data is incomplete or unavailable.</p>;
  }

  const temperature = main.temp;
  const humidity = main.humidity;
  const description = weather[0].description;

  return (
    <div className="dashboard">
      <h1>City: {name}</h1>
      <p>Today is {moment().format('dddd')} {moment().format('LL')}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default CurrentWeatherCard;
