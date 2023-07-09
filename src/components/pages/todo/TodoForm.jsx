import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {ClassicInput, TodoBtn } from '../../UI/index'
import { addNewTodo } from '../../../store/todoSlice'

export default function TodoForm() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();

    async function handleSubmit(e){
        e.preventDefault()
        dispatch(addNewTodo(title));
        setTitle('')
    } 

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <ClassicInput
        type="text"
        value={title}
        placeholder="What is the task today?"
        onChange={(e) => setTitle(e.target.value)}
      ></ClassicInput>

      <TodoBtn type="submit">
        Add task
      </TodoBtn>  
    </form>
  );
}
