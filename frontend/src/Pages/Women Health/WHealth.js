import React, { useState } from "react";
import CycleTracker from "./components/CycleTracker";
import CycleHistory from "./components/CycleHistory";
import NutritionTips from "./components/NutritionTips";
import YogaExercises from "./components/YogaExercises";
import HealthGoals from "./components/HealthGoals";
import "./WHealth.css";

const WHealth = () => {
  const [cycles, setCycles] = useState([]);
  const [goals, setGoals] = useState([]);

  const addCycle = (cycleData) => {
    setCycles([...cycles, cycleData]);
  };

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <div className="WHealth">
      <h1>Women's Health Tracker</h1>
      <div className="intro">
        <p>
          The menstrual cycle is a natural process that occurs monthly for
          women. It involves the shedding of the uterine lining and is
          characterized by hormonal changes. Tracking your menstrual cycle is
          essential for understanding your body's rhythms, managing health,
          and optimizing your nutrition, yoga, and lifestyle choices.
        </p>
      </div>

      <CycleTracker addCycle={addCycle} />
      <CycleHistory cycles={cycles} />
      <NutritionTips />
      <YogaExercises />
      <HealthGoals addGoal={addGoal} goals={goals} />
    </div>
  );
}

export default WHealth
