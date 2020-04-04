import React, {useState, useContext} from "react";
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import useStyle from "../TodoList/Todolist.style"

import {TodosContext} from "../../context"

function TodoItem ({id, title, completed}) {
  const classes = useStyle();
  const {todos, setTodos} = useContext(TodosContext)

  const [checked, setChecked] = useState(completed)
  const listItemClass = [classes.todoListItem];

  if(checked){
    listItemClass.push("completed");
  }

  const changeCheckedStatus = (e) => {
    completed = e.target.checked;
    
    setChecked(completed)
  }

  const removeTodo = id => {
    const newTodos = todos.filter(item => item.id !== id);
    setTodos(newTodos);
  }

  return (
    <li className={listItemClass.join(' ')}>
      <div>
        <Checkbox
          checked={checked}
          onChange={(e) => changeCheckedStatus(e)}
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