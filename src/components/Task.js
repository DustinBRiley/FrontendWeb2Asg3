import React from "react";

function Task(props) {
    return(
        <div>
            <label style={{
                display: "flex",
                justifyContent: "space-between",
                background: props.completed ? "green" : "red",
                textDecoration: props.completed ? "line-through" : "none",
                margin: "5% 12%",
                padding: "5px",
                width: "75%"
            }}>
            <input type="checkbox" onChange={() => props.checked(props.id)} id="check" />
            {props.description}
            <button onClick={() => props.delTask(props.id)}>X</button>
            </label>
        </div>
    );
}

export default Task;