// import { createSelector } from "@reduxjs/toolkit";

// // export const todoListSelector = (state) => state.todoList.todos;
// export const todoListSelector = (state: { todoList: { todos: any } }) =>
//   state.todoList.todos;

// export const todosRemainingSelector = createSelector(
//   todoListSelector,
//   (ListingTodos,) => {
//     return todoList.filter((todo) => {
//       if (status === "All") {
//         return priorities.length
//           ? todo.name.includes(searchText) && priorities.includes(todo.priority)
//           : todo.name.includes(searchText);
//       }

//       return (
//         todo.name.includes(searchText) &&
//         (status === "Completed" ? todo.completed : !todo.completed) &&
//         (priorities.length ? priorities.includes(todo.priority) : true)
//       );
//     });
//   }
// );

// chưa dùng tới cái này là để search
