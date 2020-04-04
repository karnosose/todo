import React, {useState, useContext} from "react";
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import useStyle from "../TodoList/Todolist.style"

import {TodosContext} from "../../context"

function TodoItem ({id, title, completed}) {
  const classes = useStyle();
  const {toggleTodo, removeTodo} = useContext(TodosContext)
  const listItemClass = [classes.todoListItem];

  if(completed){
    listItemClass.push("completed");
  }

  return (
    <li className={listItemClass.join(' ')}>
      <div>
        <Checkbox
          checked={completed}
          onChange={() => toggleTodo(id)}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />

        <span className={classes.itemTitle}>{title}</span>
        
        <IconButton 
          className={classes.removeIcon}
          color="primary" 
          aria-label="remov item" 
          component="span"
          onClick={() => removeTodo(id)}
        >
          <DeleteIcon fontSize="small" color="primary" />
        </IconButton>
      
      </div>
    </li>
  )
}

export default TodoItem;