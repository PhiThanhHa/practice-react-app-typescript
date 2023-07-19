import { configureStore } from "@reduxjs/toolkit";
import ListingTodos from "../container/ListingTodos";

const store = configureStore({
  reducer: {
    ListingTodos: ListingTodos.reducer,
  },
});
export default store;
