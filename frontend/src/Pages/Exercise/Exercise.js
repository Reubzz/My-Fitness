// src/App.js
import React, { useState } from "react";
import exercises from "./exercises.js";
import './exercise.css'; // Import the CSS file

const Exercise = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState("All");
  const [searchedBodyPart, setSearchedBodyPart] = useState("All");

  // const filterExercises = () => {
  //   if (selectedBodyPart === "All" && searchedBodyPart === "All") return exercises;// Return all exercises if both filters are set to "All"
  //   if (selectedBodyPart === "All") return exercises.filter(exercise => exercise.bodyPart.toLowerCase.includes(searchedBodyPart.toLowerCase()));// Return exercises that match the searched body part if the
  //   // selected body part is set to "All"
  //   if (searchedBodyPart === "All") return exercises.filter(exercise => exercise.bodyPart.includes(selectedBodyPart));// Return exercises that match the selected body part if the searched body part
  //   // is set to "All"
  //     return exercises.filter(exercise => exercise.bodyPart.toLowerCase().includes(selectedBodyPart.toLowerCase()) && exercise.bodyPart.toLowerCase().includes(searchedBodyPart.toLowerCase()));// Return exercises that match both
  //   // selected and searched body parts
        
  //   // return exercises.filter(exercise => exercise.bodyPart === selectedBodyPart);
  // };

  const filterExercises = () => {
    if (selectedBodyPart === "All" && searchedBodyPart === "All") return exercises
    if (selectedBodyPart === "All") return exercises.filter(exercise => exercise.bodyPart.toLowerCase().includes(searchedBodyPart.toLowerCase()))
    if (searchedBodyPart === "All") return exercises.filter(exercise => exercise.bodyPart.includes(selectedBodyPart))
    return exercises.filter(exercise => exercise.bodyPart.toLowerCase().includes(selectedBodyPart.toLowerCase()) && exercise.bodyPart.toLowerCase().includes(searchedBodyPart.toLowerCase()))
  }
        
  return (
    <>
      <section id="banner-title-container">
        <div class="title">Exercise Guide</div>
        {/* <div class="sub-title">All Cars available for Renting</div> */}
      </section>
  
      <div className="exercise-container">
        <div class="searchbar">
          <input type="search" name="search" onKeyUp={(e) => setSearchedBodyPart(e.target.value)} id="searchInput" placeholder="Search for a exercise..." />
          <button class="search-btn" type="submit">
              <i class="fas fa-search searchIcon"></i>
          </button>
        </div>

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
    </>
  );
};

export default Exercise;
