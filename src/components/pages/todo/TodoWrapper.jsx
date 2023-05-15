import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
uuidv4();

export default function TodoWrapper(){
    const [todos, setTodos] = useState([])

//todos = {
//completed: false
// id:"8f6529f0-4d57-4321-866f-a73a969a6003"
// isEditing: false
// task: "fjfkhoeifeiof"
//}

//todo = YOUR VALUE

    function addTodo(todo){
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }

    function toggleComplete(id){
        setTodos(todos.map(todo => todo.id === id? {...todo, completed: !todo.completed} : todo))
    }

    function deleteTodo(id){
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function editTodo(id){
      setTodos(todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo))
    }

    function editTask(task, id){
      setTodos(todos.map(todo => todo.id === id? {...todo, task, isEditing: !todo.isEditing}: todo))
    }

    return (
      <div className="TodoWrapper">
        <h1>Get things done!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
          ) : (
            <Todo
              task={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    );
}