import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'
import FormBtn from "../../UI/buttons/FormBtn";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
uuidv4();

export default function TodoWrapper(){
    const [todos, setTodos] = useState([])

    // function addTodo(todo){
    //     setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    // }

    function toggleComplete(id){
        setTodos(todos.map(todo => todo.id === id? {...todo, isCcompleted: !todo.isCompleted} : todo))
    }

    function deleteTodo(id){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function editTodo(id){
      setTodos(todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo))
    }

    function editTask(title, id){
      setTodos(todos.map(todo => todo.id === id? {...todo, title, isEditing: !todo.isEditing}: todo))
    }

    const navigate = useNavigate()

    function logOut(){
      localStorage.removeItem("token");
      navigate('/LogIn')
      window.location.reload();
    }

    async function getAllTodos() {
      const token = localStorage.getItem("token");

      let result = await axios.get(
        `https://todo-redev.herokuapp.com/api/todos`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTodos(result.data);
    }
    
 useEffect(() => {
  getAllTodos();
 }, [todos]) 

    return (
      <>
      <div className="TodoWrapper">
        <h1>Get things done!</h1>
        <TodoForm todos={todos} setTodos={setTodos}/>
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={todo.id}/>
          ) : (
            <Todo
              task={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
      
      <FormBtn style={{border: '1px solid white'}} onClick={() => logOut()}>Log out</FormBtn>
      </>
    );
}