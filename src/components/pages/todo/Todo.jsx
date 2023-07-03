import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";

export default function Todo({task, toggleComplete, editTodo, deleteTodo}) {
  const token = localStorage.getItem('token')
  return (
    <div className="Todo">
      <p onClick={() => toggleComplete(task.id)} className={`${task.isCompleted? `isCompleted`: ``}`}>{task.title}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  );
}