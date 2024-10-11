import React from 'react';

function Task(props){
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="style">{props.description}</p>
        </div>
    )
}

export default Task;