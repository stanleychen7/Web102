import React, { useState } from 'react';

const Dashboard = ({ forecastdata }) => {
    //filter
    const [filter, setFilter] = useState();

  if (!forecastdata) {
    return <p>No Forecast Data</p>;
  }

  // Assuming forecastdata is an array of daily forecast objects
  return (
    <div>
      <h2>5-Day Weather Forecast</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature (°F)</th>
            <th>Humidity (%)</th>
            <th>Weather</th>
          </tr>
        </thead>
        <tbody>
          {forecastdata.map((forecast, index) => {
            // Check if the index is a multiple of 8
            if (index % 8 === 0) {
              return (
                <tr key={index}>
                  <td>{new Date(forecast.dt * 1000).toDateString()}</td>
                  <td>{forecast.main.temp}°F</td>
                  <td>{forecast.main.humidity}%</td>
                  <td>{forecast.weather[0].description}</td>
                </tr>
              );
            } else {
              // Return null for non-matching indices
              return null;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
