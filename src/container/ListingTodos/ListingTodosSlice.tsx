import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const ListingTodosSlice = createSlice({
    name: "ListingTodos",
    initialState: { status: 'idle', todos: [] },
    reducers: {
        // searchTodos: (state, action) => {
        //     state.search = action.payload;
        // },

        addTodos: (state, action) => {
            // state.push(action.payload);
        },

        updateTodos: (state, action) => {
    //   const currentTodo = state.find(todo => todo.id === action.payload);
            // const currentTodo =state.find(to)
            
        },

        deleteTodos: (state, action) => {
            
        }
    }
})



export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log({data});
    return data.todos
})

export const addNewTodos = createAsyncThunk ('todos/addNewTodos', async (newTodo:object) => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
})
export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    console.log('[addNewName]',{ data });
    return data.todos;
  });
  
  export const updateTodo = createAsyncThunk('todos/updateTodo', async (updatedTodo) => {
    const res = await fetch('api/updateTodo', {
      method: 'POST',
      body: JSON.stringify(updatedTodo),
    })
    const data = await res.json()
    console.log('[update]',{data})
    return data.todos
  



export default ListingTodosSlice