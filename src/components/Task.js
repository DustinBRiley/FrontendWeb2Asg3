import React, { useState } from "react";
import Subtask from "./Subtask"

function Task(props) {
    const [subtasks, setSubtasks] = useState([])
    const [subDescr, setSubdescr] = useState("")
    const [subId, setSubid] = useState(0)

    function addTask() {
        setSubtasks([...subtasks,{id: subId, descr: subDescr, completed: false}]);
        // took forever to figure out I needed id and completed here
        setSubdescr("")
        setSubid(subId+1)
    }

    const delTask = id => {
        setSubtasks(subtasks.filter(task => task.id !== id))
      }

    const checked = id => {
    setSubtasks(subtasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    }

    return(
        <div style={{
                background: props.completed ? "green" : "red",
                margin: "5% 12%",
                padding: "5px",
                width: "75%"}}>
            <label style={{
                display: "flex",
                justifyContent: "space-between",
                textDecoration: props.completed ? "line-through" : "none"}}>
            <input type="checkbox" onChange={() => props.checked(props.id)} id="check" />
            {props.description}
            <button onClick={() => props.delTask(props.id)}>X</button>
            </label>
            <br></br>
            {/* <button onClick={props.toggleSubform(props.id)}>Add Subtask</button> */}
            { <label
            // style={{display: props.addSub ? "block" : "none", padding: "10px"}}
            >
                Subtask Description:<br></br>
                <input type="text" style={{margin: "5px"}} value={subDescr} onChange={(e) => {setSubdescr(e.target.value)}}></input>
                <button onClick={addTask}>Submit</button>
                {subtasks.map((task,i) => {
                    return <Subtask
                    key={i}
                    id={task.id}
                    description={task.descr}
                    completed={task.completed}
                    checked={checked}
                    delTask={delTask}
                    ></Subtask>
                    //passing functions took forever to figure out
                })}
            </label>}
        </div>
    );
}

export default Task;