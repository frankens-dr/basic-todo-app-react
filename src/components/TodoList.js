import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleTodoComplete }) {
    return (
        <ul>
            { 
                todos.map(item => (
                    <Todo key={item.id} todo={item} toggleTodoComplete={toggleTodoComplete} />
                ))}
        </ul>
    )
}

export default TodoList;