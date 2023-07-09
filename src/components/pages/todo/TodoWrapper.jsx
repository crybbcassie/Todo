import {TodoForm, Todo, EditTodoForm} from "./index";
import { FormBtn } from '../../UI/index'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../../store/todoSlice";
import { useNavigate } from "react-router-dom";

export default function TodoWrapper(){
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos)
  const { status, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

    const navigate = useNavigate()

    function logOut(){
      localStorage.removeItem("token");
      navigate('/LogIn')
      window.location.reload();
    }
    
 useEffect(() => {
   dispatch(fetchTodos());
 }, [dispatch]); 

    return (
      <>
        <div className="TodoWrapper">
          <h1>Get things done!</h1>
          <TodoForm />
          {status === "loading" && <h2 style={{color: '#fff'}}>loading...</h2>}
          {error && <h2 style={{color: '#fff'}}>error: {error}</h2>}
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm key={todo.id} {...todo} />
            ) : (
              <Todo key={todo.id} {...todo} />
            )
          )}
        </div>

        <FormBtn
          style={{ textDecoration: "underline" }}
          onClick={() => logOut()}
        >
          Log out
        </FormBtn>
      </>
    );
}