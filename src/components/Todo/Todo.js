import React, { useState } from "react";
import TodoList from "../TodoList/TodoList"
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import useStyle from "./Todo.style"

function Todo () {
  const classes = useStyle();

  let todoList = [
    { id: 1, title: 'todo1', completed: false },
    { id: 2, title: 'todo2', completed: false}
  ]

  const [todos, setTodos] = useState(todoList);
  const [title, setTitle] = useState('');

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

  return (
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
  )

}

export default Todo;