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
            <h1 className="text-3xl font-medium mb-4 sm:text-3xl ">To Do list</h1>
            <div className="flex">
                <input className='border-2 border-indigo-500 rounded-md focus:outline-none inputBox p-3 w-full text-xl' value={todo} onChange={handleChange} type='text' placeholder='enter a task' />
                <button className="ml-4 bg-green-500 w-20 font-medium text-lg sm:text-lg text-white hover:bg-neutral-900 rounded-md" onClick={handleAdd}>+</button>
            </div>
            {tasks.map((item, index) => (
                <Task onComplete={onComplete} key={index} removeTask={removeTask} task={item} tasks={tasks} />
            ))}
        </div>
    )
}

export default TaskList;