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
        <div className="flex justify-between pt-9 text-xl">
            <div className="flex text-xl">
                <input className="cursor-pointer h-8 w-7 mr-2" type="checkbox" onChange={handleComplete}/>
                <p className={task.isCompleted ? "completed" : "notCompleted"}>{task.task}</p>
            </div>
            <button className="text-sm p-2 text-white bg-neutral-900" onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default Task;