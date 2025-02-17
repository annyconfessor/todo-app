import React from "react"
import { StyledInput } from "../Input/styles"
import { StyledTitle } from "./styles"

type TodoItemTypes = {
  uuid: string
  title?: string
  completed: boolean
  handleDeleteTodo: (uuid: string) => void
  handleChange: (uuid: string) => void
}

const TodoItem = ({ uuid, title, completed, handleDeleteTodo, handleChange }: TodoItemTypes) => {

  return (
    <li className="todo-item">
      <StyledInput
        type="checkbox"
        checked={completed}
        onChange={() => handleChange(uuid)}
      />
      <button onClick={() => handleDeleteTodo(uuid)}>Delete</button>
      <StyledTitle isCompleted={completed}>{title}</StyledTitle>
    </li>
  )
}

export default TodoItem;
