import React, { useState } from 'react';
import "./BMI.css";
function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  
  const [bmi, setBMI] = useState(null);
  const [weightStatus, setWeightStatus] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100;

    if (isNaN(weightInKg) || isNaN(heightInMeters)) {
      setBMI(null);
      setWeightStatus(null);
      return;
    }

    const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
   


    // Adjust BMI based on gender (optional)
   // if (gender === 'female') {
      // Adjust BMI formula for females if needed
   // }

    setBMI(calculatedBMI.toFixed(2));

    if (calculatedBMI < 18.5) {
      setWeightStatus('Underweight');
    } else if (calculatedBMI < 25) {
      setWeightStatus('Normal weight');
    } else if (calculatedBMI < 30) {
      setWeightStatus('Overweight');
    } else {
      setWeightStatus('Obese');
    }
  };

  return (
    <>
      <section id="banner-title-container">
        <div class="title">BMI Calculator</div>
        {/* <div class="sub-title"></div> */}
      </section>
  
      <div className='bmi-mainContainer'>
        <div>
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      

      
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && (
          <div className='result'>
            <p>Your BMI is: {bmi}</p>
            <p>Your weight status is: {weightStatus}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default BMI;