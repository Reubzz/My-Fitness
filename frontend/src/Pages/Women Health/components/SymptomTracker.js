import React, { useState } from "react";

function SymptomTracker({ addSymptom }) {
  const [symptom, setSymptom] = useState("");

  const handleAddSymptom = () => {
    addSymptom(symptom);
    setSymptom("");
  };

  return (
    <div className="symptom-tracker">
      <h2>Track Symptoms</h2>
      <input
        type="text"
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        placeholder="Enter your symptoms"
      />
      <button onClick={handleAddSymptom}>Add Symptom</button>
      <div>
        <h3>Symptoms Log:</h3>
        <ul>
          {symptom && <li>{symptom}</li>}
        </ul>
      </div>
    </div>
  );
}

export default SymptomTracker;
