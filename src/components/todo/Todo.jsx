import { useDispatch } from "react-redux";
import {
  toggleComplete,
  toggleEditing,
  deleteTodo,
} from "../../store/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ id, title, isCompleted }) {
  const dispatch = useDispatch();
  return (
    <div className="Todo">
      <p
        onClick={() => dispatch(toggleComplete(id))}
        className={`${isCompleted ? `isCompleted` : ``}`}
      >
        {title}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => dispatch(toggleEditing(id))}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => dispatch(deleteTodo(id))}
        />
      </div>
    </div>
  );
}
