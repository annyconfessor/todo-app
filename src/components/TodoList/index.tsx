import React from "react"
import TodoItem from "../TodoItem"

type TodoType = {
  uuid: string
  title: string
  completed: boolean
}

type TodosListTypes = {
  todos: TodoType[]
  deleteTodo: (uuid: string) => void
  handleChange: (uuid: string) => void
}

const TodosList = ({ todos, deleteTodo, handleChange }: TodosListTypes) => {

  return (
    <div>
      {todos?.map(todo => (
        <TodoItem
          key={todo.uuid}
          uuid={todo.uuid}
          title={todo.title}
          handleDeleteTodo={deleteTodo}
          handleChange={handleChange}
          completed={todo.completed}
        />
      ))}
    </div>
  )
}

export default TodosList
