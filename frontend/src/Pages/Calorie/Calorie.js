import React, { useState } from 'react';
import './Calorie.css';
// import calorie from '../Component/Assets/calorieT.jpg';


const Calorie = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [totalCalories, setTotalCalories] = useState(0);

  const handleAddFood = () => {
    if (foodName && calories) {
      const newFoodItem = { name: foodName, calories: parseInt(calories) };
      setFoodItems([...foodItems, newFoodItem]);
      setTotalCalories(totalCalories + newFoodItem.calories);
      setFoodName('');
      setCalories('');
    }
  };

  return (
    <div className='Calorie-overall'>
    <div className="calorie-tracker">
      <h1>Calorie Tracker</h1>
      
      <div>
        <input
          type="text"
          placeholder="Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <button onClick={handleAddFood}>Add Food</button>
      </div>

      <div className="total-calories">
        <h2>Total Calories: {totalCalories}</h2>
      </div>

      <h3>Food List:</h3>
      <ul>
        {foodItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.calories} Calories
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};


export default Calorie;