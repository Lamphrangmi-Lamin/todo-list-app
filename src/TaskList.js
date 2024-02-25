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
            // alert("ADD a task!")
            return;
        }

        addTask({
            task: todo,
            isCompleted: false
        });
        setTodo('');
    }

    return (
        <div className="sm:max-w-xl ml-3 mr-3">
            <h1 className="text-5xl font-medium mb-4">To Do list</h1>
            <div className="flex">
                <input className='rounded-md focus:outline-none inputBox p-4 w-full text-xl' value={todo} onChange={handleChange} type='text' placeholder='enter a task' />
                <button className="ml-5 bg-green-500 w-40 font-medium text-xl text-white hover:bg-neutral-900 rounded-md" onClick={handleAdd}>Add Task</button>
            </div>
            {tasks.map((item, index) => (
                <Task onComplete={onComplete} key={index} removeTask={removeTask} task={item} tasks={tasks} />
            ))}
        </div>
    )
}

export default TaskList;