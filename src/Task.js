import React from "react"
import './Task.css'

function Task({ task, removeTask, onComplete }) {
    const handleComplete = () => {
        onComplete(task);
    }
    
    const handleRemove = () => {
        removeTask(task)
    }

    return (
        <div>
            <input type="checkbox" onChange={handleComplete}/>
            <p className={task.isCompleted ? "completed" : "notCompleted"}>{task.task}</p>
            <p>{task.isCompleted? "TRUE" : "FALSE"}</p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default Task;