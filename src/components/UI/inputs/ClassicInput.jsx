import cl from './Input.module.css'

export default function ClassicInput(props){
    return <>
        <input className={cl.todo_input} {...props}/>
    </>
}