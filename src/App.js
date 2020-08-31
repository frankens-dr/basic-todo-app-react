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
  
  function toggleTodoComplete(id) {
    setTodoState(
      todoList.map(todoItem => {
        if(todoItem.id === id) {
          return {
            ...todoItem,
            complete : !todoItem.complete
          };
        }
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>My Todo List</p>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todoList} toggleTodoComplete={toggleTodoComplete} />
      </header>
    </div>
  );
}

export default App;
