
import React, { useState } from "react";
import styled from "styled-components";

function GoalTimeLine({ onTimeframeChange }) {
  const [activeTimeframe, setActiveTimeframe] = useState("today");

  const handleTimeframeClick = (timeframe) => {
    setActiveTimeframe(timeframe);
    onTimeframeChange(timeframe);
  };

  return (
    <div>
       <TimeLine>
        <TimeframeButton
          active={activeTimeframe === "today"}
          onClick={() => handleTimeframeClick("today")}
        >
          <p>Today Goals</p>
        </TimeframeButton>

        <TimeframeButton
          active={activeTimeframe === "week"}
          onClick={() => handleTimeframeClick("week")}
        >
          <p>Weekly Goals</p>
        </TimeframeButton>

        <TimeframeButton
          active={activeTimeframe === "month"}
          onClick={() => handleTimeframeClick("month")}
        >
          <p>Monthly Goals</p>
        </TimeframeButton>

        <TimeframeButton
          active={activeTimeframe === "year"}
          onClick={() => handleTimeframeClick("year")}
        >
          <p>Yearly Goals</p>
        </TimeframeButton>
      </TimeLine>
    </div>
  );
}

const TimeLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  font-weight: 600;
`;

const TimeframeButton = styled.div`
  background-color: ${({ active }) => (active ? "black" : "white")};
  color: ${({ active }) => (active ? "white" : "black")};
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (!active ? "#f0f0f0" : "black")};
  }
`;

export default GoalTimeLine;
