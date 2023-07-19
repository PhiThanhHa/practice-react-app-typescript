import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ListingTodosSlice = createSlice({
  name: "ListingTodos",
  initialState: { status: "idle", todos: [] },
  reducers: {
    // searchTodos: (state, action) => {
    //     state.search = action.payload;
    // },

    addTodos: (state, action) => {
      state.push(action.payload);
    },

    updateTodos: (state, action) => {
        // const currentTodo = state.find(todo => todo.id === action.payload);
      const currentTodo =state.find(todo => todo.id === action.payload);
      if
    },

    deleteTodos: (state, action) => {},
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log("[getData]", { data });
  return data.todos;
});

export const addNewTodos = createAsyncThunk(
  "todos/addNewTodos",
  async (newTodo: object) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    console.log("[addNewData]", { data });
    return data.todos;
  }
);

export const updateTodos = createAsyncThunk(
  "todos/updateTodos",
  async (updatedTodo) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify(updatedTodo),
    });
    const data = await res.json();
    console.log("[updateData]", { data });
    return data.todos;
  }
);

export const deleteTodos = createAsyncThunk(
  "todos/deleteTodos",
  async (updatedTodo) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: "DELETE",
      body: JSON.stringify(updatedTodo),
    });
    const data = await res.json();
    console.log("[update]", { data });
    return data;
  }
);

export default ListingTodosSlice;
