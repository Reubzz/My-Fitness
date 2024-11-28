import React, { useState } from "react";

function HealthGoals({ addGoal, goals }) {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal(goal);
    setGoal("");
  };

  return (
    <div className="health-goals">
      <h2 className="Whealth-title">Health Goals</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter your health goal"
        />
        <button type="submit">Add Goal</button>
      </form>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
}

export default HealthGoals;
