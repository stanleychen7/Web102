import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const UpdateCrewmate = () => {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" });

    useEffect(() => {
        const fetchCrewmate = async () => {
            try {
                // Fetch the Crewmate to update from the 'Crewmate' table in your Supabase database
                const { data, error } = await supabase
                    .from('Crewmate')
                    .select()
                    .eq('id', id);

                if (error) {
                    console.error("Error fetching Crewmate:", error);
                } else if (data && data.length > 0) {
                    // Set the state with the fetched Crewmate data
                    const fetchedCrewmate = data[0];
                    setCrewmate({
                        name: fetchedCrewmate.name,
                        speed: fetchedCrewmate.speed,
                        color: fetchedCrewmate.color, // Include the color in the state
                    });
                }
            } catch (error) {
                console.error("Error fetching Crewmate:", error);
            }
        };

        // Call the fetchCrewmate function when the component mounts
        fetchCrewmate();
    }, [id]); // Include 'id' in the dependency array to fetch the specific Crewmate

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updateCrewmate = async (event) => {
        event.preventDefault();

        try {
            await supabase
                .from('Crewmate')
                .update({
                    name: crewmate.name,
                    speed: crewmate.speed,
                    color: crewmate.color, // Include the color in the update
                })
                .eq('id', id);

            console.log("Crewmate updated successfully");
            window.location = "/";
        } catch (error) {
            console.error("Error updating Crewmate:", error);
        }
    };

    const deleteCrewmate = async (event) => {
        event.preventDefault();

        try {
            await supabase
                .from('Crewmate')
                .delete()
                .eq('id', id);

            console.log("Crewmate deleted successfully");
            window.location = "/";
        } catch (error) {
            console.error("Error deleting Crewmate:", error);
        }
    };

    return (
        <div>
            <form onSubmit={updateCrewmate}>
                <label>
                    Name:
                    <input type="text" name="name" value={crewmate.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Speed:
                    <input type="text" name="speed" value={crewmate.speed} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Color:
                    <select name="color" value={crewmate.color} onChange={handleChange}>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>                </label>
                <br />
                <input type="submit" value="Update" />
            </form>

            <button onClick={deleteCrewmate}>Delete Crewmate</button>
        </div>
    );
}

export default UpdateCrewmate;
