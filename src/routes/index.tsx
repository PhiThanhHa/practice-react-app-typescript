import Sidebar from "../container/Sidebar";
import ListingTodos from "../container/ListingTodos";
import CreateEditTodo from "../container/CreateEditTodo";

//Public Routes
const publicRoutes = [
  { path: "/", component: ListingTodos },
  { path: "/create-edit", component: CreateEditTodo, layout: null },
  // {path: '/', component: Page2, layout: headeronly},
];

// Private Routes
const privateRoutes = [
  { path: "/Sidebar", component: Sidebar },
  { path: "/Sidebar", component: Sidebar },
];

export { publicRoutes, privateRoutes };
