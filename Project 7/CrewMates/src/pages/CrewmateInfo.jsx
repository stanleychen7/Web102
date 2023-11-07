import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const CrewmateInfo = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" });

  useEffect(() => {
    const fetchCrewmateInfo = async () => {
      try {
        const { data, error } = await supabase
          .from('Crewmate')
          .select()
          .eq('id', id);

        if (error) {
          console.error("Error fetching Crewmate info:", error);
        } else if (data && data.length > 0) {
          const fetchedCrewmate = data[0];
          setCrewmate({
            name: fetchedCrewmate.name,
            speed: fetchedCrewmate.speed,
            color: fetchedCrewmate.color,
          });
        }
      } catch (error) {
        console.error("Error fetching Crewmate info:", error);
      }
    };

    fetchCrewmateInfo();
  }, [id]);

  const handleDelete = async () => {
    try {
      // Delete the Crewmate with the given id from the 'Crewmate' table
      await supabase.from('Crewmate').delete().eq('id', id);
      // Redirect to the home page or any other appropriate page
      window.location = "/";
    } catch (error) {
      console.error("Error deleting Crewmate:", error);
    }
  };

  return (
    <div className="CrewmateInfo">
      <h2>Crewmate Information</h2>
      <p>Name: {crewmate.name}</p>
      <p>Speed: {crewmate.speed}</p>
      <p>Color: {crewmate.color}</p>
      <Link to={`/update/${id}`}>
        <button className="updateButton">
          Update Crewmate
        </button>
      </Link>
      <button className="deleteButton" onClick={handleDelete}>
        Delete Crewmate
      </button>
    </div>
  );
};

export default CrewmateInfo;
