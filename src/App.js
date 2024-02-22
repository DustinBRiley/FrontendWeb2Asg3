import { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([])
  const [descr, setDescr] = useState("")
  const [id, setId] = useState(0)

  function addTask() {
    setTasks([...tasks,{id: id, descr: descr, completed: false}]);
    // took forever to figure out I needed id and completed here
    setDescr("")
    setId(id+1)
  }

  const delTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const checked = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
  }

  return (
    <div className="App">
      <h1>Welcome to the Task Manager</h1>
      <label>
          Task Description:
          <input type="text" value={descr} onChange={(e) => {setDescr(e.target.value)}}></input>
      </label>
      <button onClick={addTask}>Submit</button>
      {tasks.map((task,i) => {
        return <Task key={i} id={task.id} description={task.descr} completed={task.completed} checked={checked} delTask={delTask}></Task>
        //passing functions took forever to figure out
      })}
    </div>
  );
}

export default App;
