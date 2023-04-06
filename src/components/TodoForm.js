import {useState} from 'react'

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        addTodo(value)
        setValue('')
    }

  return <form className='TodoForm' onSubmit={handleSubmit}>
    <input type='text' className='todo-input' 
    value={value}
    placeholder='What is the task today?'
    onChange={(event) => setValue(event.target.value)}></input>

    <button type='submit' className='todo-btn'>Add task</button>
  </form>;
}
