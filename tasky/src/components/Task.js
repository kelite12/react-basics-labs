import React from 'react';
import './Task.css';
function Task(props){
        let backgroundColor;
        switch (props.level) {
            case 'Low':
                backgroundColor = '#d4edda';
                break;
            case 'Medium':
                backgroundColor = '#fff3cd'; 
                break;
            case 'High':
                backgroundColor = '#f8d7da'; 
                break;
            default:
                backgroundColor = '#fff'; 
    }
  
    return (
        <div className="card"style={{backgroundColor: props.done ? 'lightgrey' : backgroundColor}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="style">{props.description}</p>
            <p className="level">{props.level}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    );
}

export default Task;