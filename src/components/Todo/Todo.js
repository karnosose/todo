import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';


class Todo extends Component {
  state = {
    todos: [
        { id: 1, title: 'todo1', completed: 'false' },
        { id: 2, title: 'todo1', completed: 'false'}
    ]
  }

  render () {
    return (
      <div className='container'>
        <h1>App todo</h1>
        <TextField 
          label="App title"
          variant="outlined"
          color="primary"
        />
        
        
      </div>
    )
  }
}

export default Todo;