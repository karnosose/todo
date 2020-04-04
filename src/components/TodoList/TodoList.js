import React from "react"
import TodoItem from "";

function TodoList ({ todos }) {
    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    )
}

export default TodoList;