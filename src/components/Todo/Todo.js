import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import { style } from "./Todo.style"

class Todo extends Component {

  state = {
    todos: [
        { id: 1, title: 'todo1', completed: 'false' },
        { id: 2, title: 'todo1', completed: 'false'}
    ]
  }

  render () {
    return (
      <Container maxWidth="lg">
        <div style={style.todoForm}>
          <h1>App todo</h1>
          <TextField 
            style={style.todoFormItem}
            label="App title"
            variant="outlined"
            color="primary"
          />
  
        </div>
      </Container>
    )
  }
}

export default Todo;