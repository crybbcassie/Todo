import { useState } from "react";

export default function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update task"
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
}
