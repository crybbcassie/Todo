import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
        console.log(action)
      state.value = action.payload;
    },
    deleteTodos: (state, action) => {
         console.log(action);
      state.value = action.payload;
    },
  },
});

export const { addTodos, deleteTodos } = todosSlice.actions;

export default todosSlice.reducer;
