
import React, { useState } from "react";
import GoalInput from "./GoalInput";
import GoalList from "./GoalList";

export default function GoalApp({ timeframe, onPointsEarned }) {
  const generateRandomPoints = () => Math.floor(Math.random() * 6) + 5; // Random number between 5-10

  const [goals, setGoals] = useState({
    today: {
      Learning: [],
      Health: [],
      Money: [],
    },
    week: {
      Learning: [],
      Health: [],
      Money: [],
    },
    month: {
      Learning: [],
      Health: [],
      Money: [],
    },
    year: {
      Learning: [],
      Health: [],
      Money: [],
    },
  });

  const addGoal = (text, category) => {
    const points = generateRandomPoints();
    setGoals((prevGoals) => ({
      ...prevGoals,
      [timeframe]: {
        ...prevGoals[timeframe],
        [category]: [
          ...prevGoals[timeframe][category],
          { text, points, completed: false },
        ],
      },
    }));
  };

  const handleComplete = (category, index) => {
    const currentGoal = goals[timeframe][category][index];
    const pointsToAdd = currentGoal.completed
      ? -currentGoal.points
      : currentGoal.points;

    setGoals((prevGoals) => ({
      ...prevGoals,
      [timeframe]: {
        ...prevGoals[timeframe],
        [category]: prevGoals[timeframe][category].map((goal, i) =>
          i === index ? { ...goal, completed: !goal.completed } : goal
        ),
      },
    }));

    onPointsEarned(pointsToAdd);
  };

  const handleDelete = (category, index) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      [timeframe]: {
        ...prevGoals[timeframe],
        [category]: prevGoals[timeframe][category].filter(
          (_, i) => i !== index
        ),
      },
    }));
  };

  return (
    <div>
      <GoalInput addGoal={addGoal} />
      <GoalList
        goals={goals[timeframe]}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}