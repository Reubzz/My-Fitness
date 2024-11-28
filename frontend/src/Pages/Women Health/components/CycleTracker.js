import React, { useState } from "react";

function CycleTracker({ addCycle }) {
  const [startDate, setStartDate] = useState(new Date());
  const [cycleLength, setCycleLength] = useState(28); 

  
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const nextPeriodDate = new Date(startDate);
    nextPeriodDate.setDate(startDate.getDate() + cycleLength);

    addCycle({
      startDate: formatDate(startDate),
      cycleLength,
      nextPeriodDate: formatDate(nextPeriodDate),
    });

   
    setStartDate(new Date());
    setCycleLength(28); 
  };

  return (
    <div className="cycle-tracker">
      <h2 className="Whealth-title">Menstrual Cycle Tracker</h2>
      <form className="cycle-tracker-form" onSubmit={handleSubmit}>
        <div>
          <label>Start Date of Last Period:</label>
          <input
            type="date"
            value={startDate.toISOString().split("T")[0]}
            onChange={(e) => setStartDate(new Date(e.target.value))}
          />
        </div>
        <div>
          <label>Cycle Length (in days):</label>
          <input
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(parseInt(e.target.value))}
            min="21"
            max="35"
          />
        </div>
        <button type="submit">Track Now</button>
      </form>
    </div>
  );
}

export default CycleTracker;
