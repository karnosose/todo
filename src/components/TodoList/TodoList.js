import React, {useContext} from "react"
import TodoItem from "../TodoItem/TodoItem";
import useStyle from './Todolist.style'
import {TodosContext} from "../../context"


function TodoList () {
    const {state} = useContext(TodosContext)
    const classes = useStyle();
    return (
        <ul className={classes.todoList}>
            {state.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    )
}

export default TodoList;