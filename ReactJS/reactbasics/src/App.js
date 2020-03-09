import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {

  const [courseGoals, setCourseGoals] = useState([
    { id: '1', text: 'weed' },
    { id: '2', text: 'coke' },
    { id: '3', text: 'perico' }
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <>
      <div className="course-goals">
        <h2>Course Goals</h2>
        <NewGoal onAddGoal={addNewGoalHandler} />
        <GoalList goals={courseGoals} />
      </div>
    </>
  );
}

export default App;