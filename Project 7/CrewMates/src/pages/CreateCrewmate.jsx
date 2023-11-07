import React, { useState } from 'react';
import { supabase } from '../client';

const CreateCrewmate = () => {
    const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "red" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCrewmate((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const createCrewmate = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        try {
            // Insert the Crewmate object into your Supabase table
            const { error } = await supabase
                .from('Crewmate')
                .insert([crewmate]);
            
            if (error) {
                console.error("Error creating Crewmate:", error);
            } else {
                console.log("Crewmate created successfully");
                // Redirect to another page or take any other actions
                window.location = "/";
            }
        } catch (error) {
            console.error("Error creating Crewmate:", error);
        }
    }

    return (
        <div>
            <form onSubmit={createCrewmate}>
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
                    </select>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateCrewmate;
