// src/App.js
import React, { useState } from "react";
import exercises from "./exercises.js";
import './exercise.css'; // Import the CSS file

const Exercise = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState("All");

  const filterExercises = () => {
    if (selectedBodyPart === "All") return exercises;
    return exercises.filter(exercise => exercise.bodyPart === selectedBodyPart);
  };

  return (
    <div className="exercise-container">
      <h1><b><u><i>Exercise Guide</i></u></b></h1>
      <select onChange={(e) => setSelectedBodyPart(e.target.value)}>
        <option value="All">All</option>
        <option value="Chest">Chest</option>
        <option value="Legs">Legs</option>
        <option value="Back">Back</option>
        <option value="Shoulders">Shoulders</option>
        <option value="Biceps">Biceps</option>
        <option value="Triceps">Triceps</option>


        {/* Add more body parts as needed */}
      </select>

      <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filterExercises().map(exercise => (
          <div className="exercise-card" key={exercise.id}>
            <h2>{exercise.name}</h2>
            <img src={exercise.imageUrl} alt={exercise.name} />
            <p>Body Part: {exercise.bodyPart}</p>
            <a href={exercise.videoUrl} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
