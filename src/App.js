// useState is a hook
import { useState } from 'react'
import Header from './components/Header';
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

// use redux or some type of context store that hovers over state in production environment

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'doc appt',
            day: 'feb 5th @ 2:30',
            reminder: true,
        },
        {
            id: 2,
            text: 'ballet',
            day: 'feb 6th @ 1:30',
            reminder: true,
        },
        {
            id: 3,
            text: 'grocery shopping',
            day: 'feb 5th @ 2:30',
            reminder: false,
        }
    ]
)

//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000)+1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

//delete task function
const deleteTask = (id) => {
  // setTasks() lets us deal with immutable state
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}


  return (
    <div className="container">
      
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : ('No Tasks to Show')
  }
      
    </div>
  );
}

export default App;
