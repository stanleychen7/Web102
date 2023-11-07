import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './dashboard.css'

const Dashboard = ({ forecastdata }) => {
  const [filterDay, setFilterDay] = useState(''); // State to hold the filter day

  // Filter the data based on the filterDay
  const filteredForecast = forecastdata.filter((forecast) => {
    // Get the day name and timestamp from the forecast date
    const forecastDate = new Date(forecast.dt * 1000);
    const dayName = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });
    const timestamp = forecastDate.toLocaleTimeString();
    
    return dayName.toLowerCase().includes(filterDay.toLowerCase()) || timestamp.toLowerCase().includes(filterDay.toLowerCase());
  });

  return (
    <div>
      <h2>5-Day Weather Forecast</h2>
      <div>
        <label>Filter by Day/Time: </label>
        <input
          type="text"
          value={filterDay}
          onChange={(e) => setFilterDay(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Timestamp</th>
            <th>Temperature (°F)</th>
            <th>Humidity (%)</th>
            <th>Weather</th>
            <th>View in Kelvin</th>
          </tr>
        </thead>
        <tbody>
          {filteredForecast.map((forecast, index) => (
            <tr key={index}>
              <td>{new Date(forecast.dt * 1000).toDateString()}</td>
              <td>{new Date(forecast.dt * 1000).toLocaleTimeString()}</td>
              <td>{forecast.main.temp}°F</td>
              <td>{forecast.main.humidity}%</td>
              <td>{forecast.weather[0].description}</td>
              <td>
                <Link to={`/detail/${forecast.dt}/standard`}>View Details in Kelvin</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
