import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ShowCrewmate = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            try {
                // Fetch Crewmates from the 'Crewmate' table in your Supabase database
                const { data, error } = await supabase
                    .from('Crewmate')
                    .select()
                    .order('created_at', { ascending: true });

                if (error) {
                    console.error("Error fetching Crewmates:", error);
                } else {
                    // Set the state of crewmates with the fetched data
                    setCrewmates(data);
                }
            } catch (error) {
                console.error("Error fetching Crewmates:", error);
            }
        }

        // Call the fetchCrewmates function when the component mounts
        fetchCrewmates();
    }, []); // The empty dependency array ensures the effect runs only once

    const handleUpdate = (id) => {
        // Redirect to the UpdateCrewmate page with the selected Crewmate's id
        window.location = `/update/${id}`;
    };

    const handleDelete = async (id) => {
        try {
            // Delete the Crewmate with the given id from the 'Crewmate' table
            await supabase.from('Crewmate').delete().eq('id', id);
            // Update the list of crewmates after deletion
            setCrewmates((prevCrewmates) =>
                prevCrewmates.filter((crewmate) => crewmate.id !== id)
            );
        } catch (error) {
            console.error("Error deleting Crewmate:", error);
        }
    };

    return (
        <div className="ShowCrewmate">
            {crewmates && crewmates.length > 0 ? (
                crewmates.map((crewmate, index) => (
                    <Card
                        key={crewmate.id}
                        id={crewmate.id}
                        name={crewmate.name}
                        speed={crewmate.speed}
                        color={crewmate.color} // Display the color for each crewmate
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))
            ) : (
                <h2>No Crewmates Yet 😞</h2>
            )}
        </div>
    );
};

export default ShowCrewmate;
