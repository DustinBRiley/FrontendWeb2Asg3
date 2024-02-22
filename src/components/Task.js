import React from "react";

function Task(props) {
    return(
        <div>
            <label style={{textDecoration: props.completed ? "line-through" : "none"}} htmlFor="check">
            <input type="checkbox" onChange={() => props.checked(props.id)} id="check" />
            {props.description}
            <button onClick={() => props.delTask(props.id)}>X</button>
            </label>
        </div>
    );
}

export default Task;