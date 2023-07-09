import { useState } from "react";
import { ClassicInput, TodoBtn } from "../../UI/index";
import { updateTodo } from "../../../store/todoSlice";

export default function EditTodoForm({title, id}) {
  const [value, setValue] = useState({title});

  function handleSubmit(e) {
    e.preventDefault();
    updateTodo(id, value);
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
