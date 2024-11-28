import React, { useState } from "react";

function SymptomTracker({ addSymptom, symptoms }) {
	const [symptom, setSymptom] = useState("");

	const handleAddSymptom = (e) => {
		e.preventDefault();
		addSymptom(symptom);
		setSymptom("");
	};

	return (
		<div className="symptom-tracker">
			<h2 className="Whealth-title">Track Symptoms</h2>
			<form onSubmit={handleAddSymptom}>
				<input
					type="text"
					value={symptom}
					onChange={(e) => setSymptom(e.target.value)}
					placeholder="Enter your symptoms"
				/>
				<button type="submit">Add Symptom</button>
			</form>
			<div>
				<h3>Symptoms Log:</h3>
				<ul>
					{symptoms.map((symptom, index) => (
					<li key={index}>{symptom}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default SymptomTracker;
