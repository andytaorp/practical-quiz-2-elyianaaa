import React from "react";
import Habit from "./Habit";

export default function HabitList({ habits, handleToggleHabit, handleDeleteHabit }) {
  return (
    <ul style={{ listStyle: "none", padding: "0" }}>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          handleToggleHabit={handleToggleHabit}
          handleDeleteHabit={handleDeleteHabit}
        />
      ))}
    </ul>
  );
}
