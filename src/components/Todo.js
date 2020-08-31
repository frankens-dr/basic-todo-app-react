import React from 'react';

const divStyle = {
    display: "flex"
}

function Todo({ todo, toggleTodoComplete, removeTodo }) {

    function handleToggleClick() {
        toggleTodoComplete(todo.id);
    }

    function handleRemoveTodo() {
        removeTodo(todo.id);
    }

    return (
        <div style = {divStyle}>
            <input type='checkbox' onClick={handleToggleClick}/>
            <li style = {{
                color: "white",
                textDecoration: todo.complete ? "line-through" : null
            }}>{todo.task}</li>
            <button onClick={handleRemoveTodo}>X</button>
        </div>
    );
}

export default Todo;