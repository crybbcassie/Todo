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
    const token = localStorage.getItem("token");

         async function toggleComplete(token, id) {
           await axios
             .patch(
               `https://todo-redev.herokuapp.com/api/todos/${id}/isCompleted`,
               {
                 id: id,
               },
               {
                 headers: {
                   "Content-Type": "application/json; charset=utf-8",
                   Authorization: `Bearer ${token}`,
                 },
               }
             )
             .then((res) => {
               console.log(res);
               setTodos(
                 todos.map((todo) =>
                   todo.id === id
                     ? { ...todo, isCompleted: !todo.isCompleted }
                     : todo
                 )
               );
             })
             .catch((e) => {
               console.log(e);
             });
         }

    const navigate = useNavigate()

    function logOut(){
      localStorage.removeItem("token");
      navigate('/LogIn')
      window.location.reload();
    }

     async function updateTodo(token, id, title) {
       await axios
         .patch(
           `https://todo-redev.herokuapp.com/api/todos/${id}`,
           {
             title: title,
           },
           {
             headers: {
               "Content-Type": "application/json; charset=utf-8",
               Authorization: `Bearer ${token}`,
             },
           }
         )
         .then((res) => {
           console.log(res);
           setTodos(
             todos.map((todo) =>
               todo.id === id
                 ? { ...todo, title, isEditing: !todo.isEditing }
                 : todo
             )
           );
         })
         .catch((e) => {
           console.log(e);
         });
     }

    async function getAllTodos(token) {

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
  getAllTodos(token);
 }, []) 

    return (
      <>
        <div className="TodoWrapper">
          <h1>Get things done!</h1>
          <TodoForm todos={todos} setTodos={setTodos} />
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm updateTodo={updateTodo} todo={todo} key={todo.id} />
            ) : (
              <Todo
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                key={todo.id}
                toggleComplete={toggleComplete}
                updateTodo={updateTodo}
              />
            )
          )}
        </div>

        <FormBtn style={{ textDecoration: 'underline' }} onClick={() => logOut()}>
          Log out
        </FormBtn>
      </>
    );
}