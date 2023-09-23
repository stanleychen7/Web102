import React from "react";
import Breed from "./Breed";

const Board = () => {
    return (
        <div className="Board">
            <table>
                <tbody>
                    <tr>
                        <td className="boardCell">
                            <img className= "dog-image" src = {"/images/labrador.jpeg"} alt = "Labrador"/>
                            <Breed breed="Labrador Retriever"/>
                        </td>
                        <td className="boardCell">
                            <img className= "dog-image" src = {"/images/golden_retriever.jpeg"} alt = "Golden Retriever"/>
                            <Breed breed="Golden Retriever" />
                        </td>
                        <td className="boardCell">
                            <img className= "dog-image" src = {"/images/german_shepherd.jpeg"} alt = "German Shepherd"/>
                            <Breed breed="German Shephard" /></td>
                        <td className="boardCell">
                            <img className= "dog-image" src = {"/images/beagle.jpeg"} alt = "Beagle"/>
                            <Breed breed="Beagle" />
                        </td>
                        <td className="boardCell">
                            <img className= "dog-image" src = {"/images/poodle.jpeg"} alt = "Poodle"/>
                            <Breed breed="Poodle" />
                        </td>

                    </tr>
                    <tr>
                        <td className="boardCell">
                            <img className= "dog-image" src = {"/images/boxer.jpeg"} alt = "Boxer"/>
                            <Breed breed="Boxer" />
                        </td>
                        <td className="boardCell">
                            <img className= "dog-image" src = {"/images/husky.jpeg"} alt = "Husky"/>
                            <Breed breed="Husky" />
                            </td>
                        <td className="boardCell">
                            <img className= "dog-image" src = {"/images/doberman.jpeg"} alt = "Doberman"/>
                            <Breed breed="Doberman" />
                        </td>
                        <td className="boardCell">
                            <img className= "dog-image" src = {"/images/bulldog.jpeg"} alt = "Bulldog"/>
                            <Breed breed="Bulldog" />
                        </td>
                        <td className="boardCell">
                            <img className= "dog-image" src = {"/images/pitbull.jpeg"} alt = "Pitbull"/>
                            <Breed breed="Pitbull" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Board;
