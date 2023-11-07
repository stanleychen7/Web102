import './App.css';
import React, { useState } from 'react';
import { useRoutes, Link } from 'react-router-dom';
import CreateCrewmate from './pages/CreateCrewmate';
import ShowCrewmate from './pages/ShowCrewmate';
import UpdateCrewmate from './pages/UpdateCrewmate';
import CrewmateInfo from './pages/CrewmateInfo';

const App = () => {
  const [crewmate, setCrewmate] = useState([]);

  // Function to add a new Crewmate to the crewmate state
  const addCrewmate = (newCrewmate) => {
    setCrewmate([...crewmate, newCrewmate]);
  };

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCrewmate data={crewmate} />,
    },
    {
      path: "/new",
      element: <CreateCrewmate addCrewmate={addCrewmate} />,
    },
    {
      path: "/update/:id",
      element: <UpdateCrewmate />,
    },
    {
      path: '/crewmate/:id',
      element: <CrewmateInfo />,
    },
  ]);
  
  return (
    <div className="App">
      <div className="header">
        <h1>👍 AmongUS Crewmates</h1>
        <Link to="/"><button className="headerBtn"> Gallery </button></Link>
        <Link to="/new"><button className="headerBtn"> Create Crewmate </button></Link>
      </div>
      {element}
    </div>
  );
}

export default App;
