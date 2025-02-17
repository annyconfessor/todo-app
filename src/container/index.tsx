import React, { useState } from "react"
import { TodoList } from "../components"
import { Header } from "../components"
import { Input } from "../components"
import { v4 as uuidv4 } from "uuid"

type TodoTypes = {
  uuid: string,
  title: string,
  completed: boolean
}

const Container = () => {
  const [todos, setTodos] = useState<TodoTypes[]>([
    {
      uuid: uuidv4(),
      title: "Setup development environment",
      completed: false
    },
    {
      uuid: uuidv4(),
      title: "Develop website and add content",
      completed: true
    },
    {
      uuid: uuidv4(),
      title: "Deploy to live server",
      completed: false
    }
  ])

  const handleChange = (uuid: string) => {
    const updateTodos = todos.map((todo) => {
      if (todo.uuid === uuid) {
        return { ...todo, completed: !todo.completed }
      } 
      return todo
    })
    console.log('updateTodos', updateTodos)
    setTodos(updateTodos)
  }

  const delTodo = (uuid: string) => {
    const res = todos.filter((todo) => todo.uuid !== uuid)
    setTodos(res)
  }

  const addTodoItem = (title: string) => {
    const newTodo = { uuid: uuidv4(), title, completed: false }
    setTodos([...todos, newTodo])
  }

  console.log('todos', todos)

    return (
      <div className="container">
        <Header />
        <Input addTodoItem={addTodoItem} />
        <TodoList
          todos={todos}
          deleteTodo={delTodo}
          handleChange={handleChange}
        />
      </div>
    )
}
export default Container
