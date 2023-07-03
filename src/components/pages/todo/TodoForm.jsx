import {useState, useEffect } from 'react'
import ClassicInput from '../../UI/inputs/ClassicInput'
import TodoBtn from '../../UI/buttons/TodoBtn'
import axios from 'axios'

export default function TodoForm({todos, setTodos}) {
    const [title, setTitle] = useState('')
    const token = localStorage.getItem("token");

    async function handleSubmit(e){
        e.preventDefault()
        createTodos(title, token);
        setTitle('')
    } 

    async function createTodos(title, token) {
  await axios
    .post(
      `https://todo-redev.herokuapp.com/api/todos`,
      {
        title: title,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      setTodos([
        ...todos,
        {
          id: res.data.id,
          task: res.data.title,
          isCompleted: false,
          isEditing: false,
          user_id: res.data.user_id
        },
      ]);
    })
    .catch((e) => {
      console.log(e);
    });
};  

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
