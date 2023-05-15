import {useState} from 'react'
import ClassicInput from '../../UI/inputs/ClassicInput'
import TodoBtn from '../../UI/buttons/TodoBtn'

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <ClassicInput
        type="text"
        value={value}
        placeholder="What is the task today?"
        onChange={(event) => setValue(event.target.value)}
      ></ClassicInput>

      <TodoBtn type="submit">
        Add task
      </TodoBtn>
    </form>
  );
}
