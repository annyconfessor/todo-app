import React, { useState } from "react";
import { StyledInput } from "./styles";

type InputProps = {
  addTodoItem: any
}

const InputComponent = ({ addTodoItem }: InputProps) => {
  const [title, setTitle] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value
    setTitle(target)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() 
    if (title.trim() === "") return
    addTodoItem(title.trim())
    setTitle("")
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <StyledInput
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={handleChange}
      />
      <StyledInput type="submit" className="input-submit" value="Submit" />
    </form>
  );
}
export default InputComponent
