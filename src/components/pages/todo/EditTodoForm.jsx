import { useState } from "react";
import ClassicInput from "../../UI/inputs/ClassicInput";
import TodoBtn from "../../UI/buttons/TodoBtn";

export default function EditTodoForm({ updateTodo, todo}) {
  const [value, setValue] = useState(todo.title);
    const token = localStorage.getItem("token");

  function handleSubmit(e) {
    e.preventDefault();
    updateTodo(token, todo.id, value);
    setValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <ClassicInput
        type="text"
        value={value}
        placeholder="Update task"
        onChange={(event) => setValue(event.target.value)}
      ></ClassicInput>

      <TodoBtn type="submit">
        Update
      </TodoBtn>
    </form>
  );
}
