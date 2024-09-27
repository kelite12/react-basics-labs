import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" discrption="Empty dishwater"/>
      <Task title="Laundry" deadline="Tomorrow" discrption="Fold laundry and put away"/>
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
