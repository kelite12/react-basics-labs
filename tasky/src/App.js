import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today">
     <i> Empty dishwater </i></Task>
      <Task title="Laundry" deadline="Tomorrow">
          <i>Fold laundry and put away </i>
      </Task>
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
