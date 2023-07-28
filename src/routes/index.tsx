import Sidebar from "../container/Sidebar";
import ListingTodos from "../container/ListingTodos";
import Page1 from "../container/page1";

//Public Routes
const publicRoutes = [
  { path: "/", component: ListingTodos },
  { path: "/Page1", component: Page1, layout: null },
  // {path: '/', component: Page2, layout: headeronly},
];

// Private Routes
const privateRoutes = [
  { path: "/Sidebar", component: Sidebar },
  { path: "/Sidebar", component: Sidebar },
];

export { publicRoutes, privateRoutes };
