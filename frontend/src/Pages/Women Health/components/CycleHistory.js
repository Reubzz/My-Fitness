import React from "react";

function CycleHistory({ cycles }) {
  return (
    <div className="cycle-history">
      <h2>Your Cycle History</h2>
      {cycles.length === 0 ? (
        <p>No cycles recorded yet.</p>
      ) : (
        <ul>
          {cycles.map((cycle, index) => (
            <li key={index}>
              <p><strong>Cycle {index + 1}</strong></p>
              <p>Start Date: {cycle.startDate}</p>
              <p>Cycle Length: {cycle.cycleLength} days</p>
              <p>Next Period: {cycle.nextPeriodDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CycleHistory;
