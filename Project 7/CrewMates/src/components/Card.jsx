import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, speed, color })  => {
  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <p>Speed: {speed}</p>
      <p>Color: {color}</p>
      <Link to={`/crewmate/${id}`} className="infoLink">
        Info
      </Link>
    </div>
  );
};

export default Card;
