import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
    const token = localStorage.getItem("token");
      let result = await axios.get(
        `https://todo-redev.herokuapp.com/api/todos`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return (result.data.map(obj => {
    return { ...obj, isEditing: false };
  }))
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async function (title, { rejectWithValue, dispatch }) {
    const token = localStorage.getItem("token");
    try {
        let result = await axios.post(
          `https://todo-redev.herokuapp.com/api/todos`,
          {
            title: title,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
      if (!result.ok) {
        throw new Error("cann/t toggle");
      }

      dispatch(addTodo(result));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const toggleComplete = createAsyncThunk(
  "todos/toggleComplete",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const token = localStorage.getItem("token");
      let result = await axios.patch(
        `https://todo-redev.herokuapp.com/api/todos/${id}/isCompleted`,
        {
          id: id,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!result.ok) {
        throw new Error("cann/t toggle");
      }

      dispatch(toggleTodoComplete({ id }));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
        const token = localStorage.getItem("token");
        let result = await axios.delete(
          `https://todo-redev.herokuapp.com/api/todos/${id}`,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      if (!result.ok) {
        throw new Error("cann/t delete");
      }

      dispatch(removeTodo({ id }));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async function (id, title, { rejectWithValue, dispatch, getState }) {
    try {
    const token = localStorage.getItem("token");
       let result = await axios.patch(
         `https://todo-redev.herokuapp.com/api/todos/${id}`,
         {
           title: title,
         },
         {
           headers: {
             "Content-Type": "application/json; charset=utf-8",
             Authorization: `Bearer ${token}`,
           },
         }
       );
      if (!result.ok) {
        throw new Error("cann/t edit");
      }

      dispatch(updateTodo({ id, title }));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.isCompleted = !toggledTodo.isCompleted;
    },
    updateTodo(state, action) {
      const { id, title } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) todo.title = title;
    }
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    // [deleteTodo.rejected]: (state, action) => {
    //   state.status = "rejected";
    //   state.error = action.payload;
    // },
    // [toggleComplete.rejected]: (state, action) => {
    //   state.status = "rejected";
    //   state.error = action.payload;
    // },
    // [addNewTodo.rejected]: (state, action) => {
    //   state.status = "rejected";
    //   state.error = action.payload;
    // },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
