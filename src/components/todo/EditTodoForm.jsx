import { useState } from "react";
import { ClassicInput, TodoBtn } from "../UI/index";
import { editTodo } from "../../store/todoSlice";
import { useDispatch } from 'react-redux'

export default function EditTodoForm({title, id}) {
  const [value, setValue] = useState(title);
   const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(editTodo({ id, title: value }));
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
