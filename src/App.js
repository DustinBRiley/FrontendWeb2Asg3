import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import {v4 as uuidv4} from "uuid"

function App() {
  const [tasks, setTasks] = useState([])
  const [descr, setDescr] = useState("")
  const [id, setId] = useState(0)

  function addTask(e) {
    if(descr === "") {
      alert("task cannot be empty")
    } else {
      setTasks([...tasks,{id: id, descr: descr, completed: false, subDescr: ""}]);
      // took forever to figure out I needed id and completed here
      setDescr("")
      setId(id+1)
    }
    e.preventDefault()
  }

  function addSubtask(e) {
    if(descr === "") {
      alert("task cannot be empty")
    } else {
      setTasks(tasks.map(task => task.id === id-1 ? {...task, subDescr: descr} : task))
      setDescr("")
    }
    e.preventDefault()
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
      <form onSubmit={addTask}> {/*got so tired of having to click the submit button*/}
        <label style={{display: "flex", justifyContent: "space-between"}} htmlFor='description'>
          Task Description:
          <input type="text" style={{margin: "5px"}} value={descr} onChange={(e) => {setDescr(e.target.value)}} id="description"></input>
          <button type="submit">Add Task</button>
          <button onClick={addSubtask}>Add Subtask</button>
        </label>
      </form>
      <br></br>
      {tasks.map((task,i) => {
        return <Task
        key={i}
        id={task.id}
        description={task.descr}
        completed={task.completed}
        subDescr={task.subDescr}
        checked={checked}
        delTask={delTask}
        ></Task>
        //passing functions took forever to figure out
      })}
    </div>
  );
}

export default App;
