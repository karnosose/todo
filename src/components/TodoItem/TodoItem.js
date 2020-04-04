import React, {useState} from "react";
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { style } from "../TodoList/Todolist.style"


function TodoItem ({id, title, completed}) {

  const [checked, setChecked] = useState(completed)
  
  const changeCheckedStatus = (e) => {
    completed = e.target.checked;
    setChecked(completed)
  }

  return (
    <li style={style.todoListItem}>
      <div>
        <Checkbox
          checked={checked}
          onChange={(e) => changeCheckedStatus(e)}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        {title}
        <IconButton style={style.removeIcon} color="primary" aria-label="remov item" component="span">
          <DeleteIcon fontSize="small" color="primary" />
        </IconButton>
      </div>
    </li>
  )
}

export default TodoItem;