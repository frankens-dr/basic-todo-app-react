import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleTodoComplete, removeTodo }) {
    return (
        <ul>
            { 
                todos.map(item => (
                    <Todo 
                        key={item.id} 
                        todo={item} 
                        toggleTodoComplete={toggleTodoComplete} 
                        removeTodo={removeTodo}
                    />
                ))}
        </ul>
    )
}

export default TodoList;