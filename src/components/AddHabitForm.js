import React, { useState } from "react";

export default function AddHabitForm({ handleAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!habitName.trim()) {
      return;
    }
    
    handleAddHabit(habitName);

    setHabitName("");
  };


  const handleHabitChange = (e) => {
    setHabitName(e.target.value)
  };

  return (
    //TODO: add a form to add a new habit
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="phone">
          <input
            id="phone-input"
            placeholder="Enter habit name..."
            value={habitName}
            onChange={handleHabitChange}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }