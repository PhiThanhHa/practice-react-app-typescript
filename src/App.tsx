import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes, privateRoutes } from "./routes";
import { Layout } from "antd";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            // let Layout = DefaultLayout

            // if(route.layout)
            // {
            //   Layout = route.layout
            // } else if (route.layout === null){
            //   Layout = Fragment
            // }

            return <Route key={index} path={route.path} element={<Page />} />;
          })}

          {privateRoutes.map((route, index) => {
            const Page = route.component;

            // let Layout = DefaultLayout

            // if(route.layout)
            // {
            //   Layout = route.layout
            // } else if (route.layout === null){
            //   Layout = Fragment
            // }

            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
