
import React from "react";
import styled from "styled-components";

const PointsBar = ({ currentPoints, maxPoints = 100 }) => {
  const percentage = (currentPoints / maxPoints) * 100;

  return (
    <BarContainer>
      <ProgressBarOuter>
        <ProgressBarInner width={percentage}>
          <PointsText>
            {currentPoints}/{maxPoints} Points
          </PointsText>
        </ProgressBarInner>
      </ProgressBarOuter>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
`;

const ProgressBarOuter = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProgressBarInner = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background-color: #8cd3c5;
  transition: width 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PointsText = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export default PointsBar;