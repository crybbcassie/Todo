import { useState } from "react";
import ClassicInput from "../../UI/inputs/ClassicInput";
import TodoBtn from "../../UI/buttons/TodoBtn";
import { updateTodo } from "../../API/Service";

export default function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(value, task.id);
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
