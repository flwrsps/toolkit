import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: JSON.parse(localStorage.getItem("kook")) || [],
};

export const todoSlices = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      let res = [...state.todo];
      res.push(action.payload);
      localStorage.setItem("kook", JSON.stringify(res));
      state.todo = [...state.todo, action.payload];
    },
    deleteTodo(state, action) {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
      localStorage.setItem("kook", JSON.stringify(state.todo));
    },
  },
});

export const { addTodo, deleteTodo } = todoSlices.actions;
export default todoSlices.reducer;
