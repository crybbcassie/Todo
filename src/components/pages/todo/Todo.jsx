import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Todo({todo, todos, setTodos, toggleComplete, updateTodo}) {
  const token = localStorage.getItem('token')

 async function deleteTodo(token, id) {
    await axios
      .delete(`https://todo-redev.herokuapp.com/api/todos/${id}`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((e) => {
        console.log(e);
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`${todo.isCompleted ? `isCompleted` : ``}`}
      >
        {todo.title}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => updateTodo(token, todo.id, todo.title)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(token, todo.id)}
        />
      </div>
    </div>
  );
}