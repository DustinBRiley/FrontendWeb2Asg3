import React from "react";

function Subtask(props) {
    return(
        <div>
            <label style={{
                display: "flex",
                justifyContent: "space-between",
                background: props.completed ? "green" : "red",
                margin: "5% 12%",
                padding: "5px",
                width: "75%"
            }}>
            <input type="checkbox" onChange={() => props.checked(props.id)}/>
            <p style={{textDecoration: props.completed ? "line-through" : "none"}}>{props.description}</p>
            <button onClick={() => props.delTask(props.id)}>X</button>
            </label>
        </div>
    );
}

export default Subtask;