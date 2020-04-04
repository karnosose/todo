import React, {useState} from "react";
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import useStyle from "../TodoList/Todolist.style"


function TodoItem ({id, title, completed}) {
  const classes = useStyle();

  const [checked, setChecked] = useState(completed)
  const listItemClass = [classes.todoListItem];

  if(checked){
    listItemClass.push("completed");
  }

  const changeCheckedStatus = (e) => {
    completed = e.target.checked;
    
    setChecked(completed)
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
        <IconButton className={classes.removeIcon} color="primary" aria-label="remov item" component="span">
          <DeleteIcon fontSize="small" color="primary" />
        </IconButton>
      </div>
    </li>
  )
}

export default TodoItem;