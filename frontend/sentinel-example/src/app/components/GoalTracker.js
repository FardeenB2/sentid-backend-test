
import React, { useState } from "react";
import GoalTimeLine from "./GoalTimeLine";
import GoalApp from "./GoalApp";
import PointsBar from "./PointsBar";
import styled from "styled-components";

function GoalTracker() {
  const [currentTimeframe, setCurrentTimeframe] = useState("today");
  const [totalPoints, setTotalPoints] = useState(0);
  const MAX_POINTS = 100;

  const timeframeChange = (timeframe) => {
    setCurrentTimeframe(timeframe);
  };

  const handlePointsChange = (points) => {
    setTotalPoints((prev) => Math.min(MAX_POINTS, prev + points));
  };

  return (
    <GoalTrackerContainer>
      <div className="home">
        <div className="title">
          <h2>
            {currentTimeframe === "today" && "Today's Goals"}
            {currentTimeframe === "week" && "Weekly Goals"}
            {currentTimeframe === "month" && "Monthly Goals"}
            {currentTimeframe === "year" && "Yearly Goals"}
          </h2>
        </div>
        <GoalTimeLine onTimeframeChange={timeframeChange} />
        <GoalApp
          timeframe={currentTimeframe}
          onPointsEarned={handlePointsChange}
        />
      </div>
      <PointsBar currentPoints={totalPoints} maxPoints={MAX_POINTS} />
    </GoalTrackerContainer>
  );
}

const GoalTrackerContainer = styled.div`
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  
  h2 {
    color: black;
    font-size: 24px;
    font-weight: bold;
  }
`;

export default GoalTracker;