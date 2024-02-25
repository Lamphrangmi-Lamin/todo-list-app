import React from "react";
import { useState } from "react";
import Task from "./Task";

function TaskList({ addTask, tasks, removeTask, onComplete }) {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleAdd = (e) => {
        if (!todo) {
            alert("ADD a task!")
            return;
        }

        addTask({
            task: todo,
            isCompleted: false
        });
        setTodo('');
    }

    return (
        <div>
            <h1>To Do list</h1>
            <input className='inputBox' value={todo} onChange={handleChange} type='text' placeholder='enter a task' />
            <button onClick={handleAdd}>Add Task</button>
            {tasks.map((item, index) => (
                <Task onComplete={onComplete} key={index} removeTask={removeTask} task={item} tasks={tasks} />
            ))}
        </div>
    )
}

export default TaskList;