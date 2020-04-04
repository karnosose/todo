import React from "react"
import TodoItem from "../TodoItem/TodoItem";
import useStyle from './Todolist.style'

function TodoList ({ todos }) {
    const classes = useStyle();
    return (
        <ul className={classes.todoList}>
            {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    )
}

export default TodoList;