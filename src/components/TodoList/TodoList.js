import React from "react"
import TodoItem from "../TodoItem/TodoItem";
import {style} from './Todolist.style'

function TodoList ({ todos }) {
    return (
        <ul style={style.todoList}>
            {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    )
}

export default TodoList;