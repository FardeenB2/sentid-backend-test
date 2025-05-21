import React, { useState } from "react";
import styled from "styled-components";

export default function GoalInput({ addGoal }) {
  const [goalText, setGoalText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Learning");

  const handleTextChange = (e) => {
    setGoalText(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddGoal = () => {
    if (goalText.trim()) {
      addGoal(goalText, selectedCategory);
      setGoalText("");
    }
  };

  return (
    <div>
      <InputFeilds>
        <SearchBar>
          <input
            type="text"
            placeholder="Add a new goal..."
            value={goalText}
            onChange={handleTextChange}
          />
        </SearchBar>

        <SelectOptions>
          <select
            id="activity-dropdown"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Learning">Learning</option>
            <option value="Health">Health</option>
            <option value="Money">Money</option>
          </select>
        </SelectOptions>

        <AddButton>
          <button onClick={handleAddGoal}>Add a goal</button>
        </AddButton>
      </InputFeilds>
    </div>
  );
}

const InputFeilds = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SearchBar = styled.div`
  input {
    height: 40px;
    width: 300px;
    padding-left: 10px;
    font-size: 16px;
    border-style: solid;
    border-color: #e4e4e7;
    border-radius: 7px;
  }
`;

const SelectOptions = styled.div`
  select {
    height: 40px;
    width: 150px;
    font-size: 16px;
    border-style: solid;
    border-color: #e4e4e7;
    border-radius: 7px;
    padding-left: 10px;
  }
`;

const AddButton = styled.div`
  button {
    height: 40px;
    width: 120px;
    border: none;
    border-radius: 7px;
    background-color: #8cd3c5;
    font-size: 18px;
    font-weight: 500;
  }
`;

