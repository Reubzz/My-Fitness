// src/App.js
import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import './exercise.css'; // Import the CSS file
import axios from '../../utils/axios.js';

const Exercise = () => {
	const [selectedBodyPart, setSelectedBodyPart] = useState("All");
	const [searchedBodyPart, setSearchedBodyPart] = useState("All");

	const [exercises, setExercises] = useState(null);
	useEffect(() => {
		const fetchExercies = async () => {
			try {
				const response = await axios.get('/exercise');
				setExercises(response.data.data);
			} catch (error) {
				console.error(error);
			}
		}
		fetchExercies();
	}, [])
	
	if(!exercises) {
		return (
			<>
				<section id="banner-title-container">
					<div class="title">Exercise Guide</div>
					{/* <div class="sub-title"></div> */}
				</section>

				<section style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
					<TailSpin
						height="50"
						width="50"
						color="#00aeef"
						ariaLabel="tail-spin-loading"
						radius="5"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				</section>
			</>
		)
	}

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
				{/* <div class="sub-title"></div> */}
			</section>

			<div className="exercise-container">
				<div className="exercise-top-nav-bar">
					<div class="exercise-searchbar">
						<input className="search-bar" type="search" name="search" onKeyUp={(e) => setSearchedBodyPart(e.target.value)} id="searchInput" placeholder="Search for a exercise..." />
						<button class="search-btn" type="submit">
							<i class="fas fa-search searchIcon"></i>
						</button>
					</div>

					<select className="exercise-select" onChange={(e) => setSelectedBodyPart(e.target.value)}>
						<option value="All">All</option>
						<option value="Chest">Chest</option>
						<option value="Legs">Legs</option>
						<option value="Back">Back</option>
						<option value="Shoulders">Shoulders</option>
						<option value="Biceps">Biceps</option>
						<option value="Triceps">Triceps</option>


						{/* Add more body parts as needed */}
					</select>
				</div>

				<div className="exercise-wrapper" style={{  }}>
					{filterExercises().map(exercise => (
						<div className="exercise-card" key={exercise.id}>
							<h2>{exercise.name}</h2>
							<div className="exercise-image-container">
								<img src={exercise.imageUrl} alt={exercise.name} />

							</div>
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
