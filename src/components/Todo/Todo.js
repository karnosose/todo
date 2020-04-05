import React, { useState, useEffect, useReducer} from "react";
import TodoList from "../TodoList/TodoList"
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import reducer from "../../reducer"
import useStyle from "./Todo.style";

import {TodosContext} from "../../context"

function Todo () {

  const classes = useStyle();
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("todos")))
  const [title, setTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const addTodo = e => {
    if(e.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: title
      })
      setTitle('');
    }
  }



  return (
    <TodosContext.Provider value={{dispatch, state}}>
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

        <TodoList />

      </div>
    </Container>
    </TodosContext.Provider>
  )

}

export default Todo;