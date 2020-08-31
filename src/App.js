import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "react-todo-list-todoItems";

function App() {
  const [todoList, setTodoState] = useState([])

  useEffect (() => {
    const initialTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (initialTodos) {
      setTodoState(initialTodos);
    }
  }, []);

  useEffect (() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  function addTodo(todo) {
    setTodoState([todo, ...todoList]);
  }

  function removeTodo(id) {
    setTodoState(todoList.filter(todoItem => todoItem.id !== id));
  }
  
  function toggleTodoComplete(id) {
    setTodoState(
      todoList.map(todoItem => {
        if(todoItem.id === id) {
          return {
            ...todoItem,
            complete : !todoItem.complete
          };
        }
        return todoItem;
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todoList} 
          toggleTodoComplete={toggleTodoComplete} 
          removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
