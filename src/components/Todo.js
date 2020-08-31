import React from 'react';

const divStyle = {
    display: "flex"
}

function Todo({ todo }) {
    return (
        <div style = {divStyle}>
            <input type='checkbox'/>
            <li style = {{
                color: "white",
                textDecoration: todo.complete ? "line-through" : null
            }}>{todo.task}</li>
            <button>X</button>
        </div>
    );
}

export default Todo;