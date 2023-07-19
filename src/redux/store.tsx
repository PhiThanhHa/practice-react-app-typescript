import {configureStore} from '@reduxjs/toolkit';
import ListingTodos from "../container/ListingTodos"


const store = configureStore ({
    reducer: {
        // ListingTodos: ListingTodosSlice.reducer
    }
});
// import { configureStore } from '@reduxjs/toolkit';
// import filtersSlice from '../components/Filters/filtersSlice';
// import todosSlice from '../components/TodoList/todosSlice';

// const store = configureStore({
//   reducer: {
//     filters: filtersSlice.reducer,
//     todoList: todosSlice.reducer,
//   },
// });

export default store;