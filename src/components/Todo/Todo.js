import React, { useState, useEffect} from "react";
import TodoList from "../TodoList/TodoList"
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import useStyle from "./Todo.style";

import {TodosContext} from "../../context"

function Todo () {

  const classes = useStyle();

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const todoList = localStorage.getItem("todos") || [];
    setTodos(JSON.parse(todoList))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = e => {
    if(e.key === 'Enter') {
      let newTodo = {
        id: Date.now(),
        title: title,
        completed: false
      }

      setTodos([
        ...todos,
        newTodo
      ])

      setTitle('');
    }
  }
  const toggleTodo = id => {
    const newTodos = todos.map(item => {
      if(item.id === id){
        item.completed = !item.completed;
      }
      return item;
    })
    
    setTodos(newTodos);
  }
 
  const removeTodo = id => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  }


  return (
    <TodosContext.Provider value={{toggleTodo, removeTodo}}>
      <Container maxWidth="lg">
      <div className={classes.todoForm}>
        <h1>App todo</h1>

        <TextField 
          value={title}
          onChange={e => setTitle(e.target.value)}
          onKeyPress={e => addTodo(e)}
          className={classes.todoFormItem}
          label="App title"
          variant="outlined"
          color="primary"
        />

        <TodoList todos={todos}  />

      </div>
    </Container>
    </TodosContext.Provider>
  )

}

export default Todo;