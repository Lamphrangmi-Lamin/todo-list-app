import './App.css';
import { useState } from 'react';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (item) => {
    setTasks([ ...tasks, item ]);
  }

  const removeTask = (task) => {
    const found = tasks.find(item => item.task === task.task);
    if (found) {
      setTasks(tasks.filter(item => item.task !== task.task));
    }
  }

  const completeTask = (task) => {
    setTasks(tasks.map((item) => (
      item === task ?
      {...item, isCompleted: !item.isCompleted}
      : item
    )))
  }

  return (
    <div className='flex justify-center mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <TaskList onComplete={completeTask} removeTask={removeTask} addTask={addTask} tasks={tasks} />
    </div>
  )
}
export default App;
