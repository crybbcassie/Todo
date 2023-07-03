import {useState} from 'react'
import ClassicInput from '../../UI/inputs/ClassicInput'
import TodoBtn from '../../UI/buttons/TodoBtn'
import { createTodos } from '../../API/Service'

export default function TodoForm({addTodo}) {
    const [title, setTitle] = useState('')
    const token = localStorage.getItem("token");

    async function handleSubmit(e){
        e.preventDefault()
        createTodos(title, token, addTodo)
        setTitle('')
    } 

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <ClassicInput
        type="text"
        value={title}
        placeholder="What is the task today?"
        onChange={(event) => setTitle(event.target.value)}
      ></ClassicInput>

      <TodoBtn type="submit">
        Add task
      </TodoBtn>  
    </form>
  );
}
