import React, { useEffect, useState } from "react";
import Subtask from "./Subtask"
import {v4 as uuidv4} from "uuid"

function Task(props) {
    const [subtasks, setSubtasks] = useState([])
    const [subid, setSubid] = useState(0)

    useEffect(()=> {
        if(subid !== 0) {
            setSubtasks([...subtasks,{id: subid, descr: props.subDescr, completed: false}])
        }
        setSubid(subid+1)
    }, [props.subDescr])

    const checked = id => {
        setSubtasks(subtasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    }

    const delTask = id => {
        setSubtasks(subtasks.filter(task => task.id !== id))
    }

    return(
        <div style={{
                background: props.completed ? "green" : "red",
                margin: "5% 12%",
                padding: "5px",
                width: "75%"}}>
            <label style={{
                display: "flex",
                justifyContent: "space-between"
                }}>
                <input type="checkbox" onChange={() => props.checked(props.id)}/>
                <p style={{textDecoration: props.completed ? "line-through" : "none"}}>{props.description}</p>
                <button onClick={() => props.delTask(props.id)}>X</button>
            </label>
            {subtasks.map((task,i) => {
                return <Subtask
                key={i}
                id={task.id}
                description={task.descr}
                completed={task.completed}
                checked={checked}
                delTask={delTask}
                ></Subtask>
            })}
        </div>
    );
}

export default Task;