import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import { updateTodo, deleteTodo } from '../../API/Service';

export default function Todo({task, toggleComplete}) {
  const token = localStorage.getItem('token')
  return (
    <div className="Todo">
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed? `completed`: ``}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => updateTodo(task.id, token)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id, token)}/>
      </div>
    </div>
  );
}