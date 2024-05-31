import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css'
import Concepts from "./Concepts";
import Register from "./Register";
import Login from "./Login";
import Register1 from "./Register1";
import Login2 from "./Login2";
import Student from "./Student";

const routerConfig = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"home",
    element:<Home/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"contact",
    element:<Contact/>
  },
  {
  path:"test",
  element:<Concepts/>
  },
  {
  path:"register",
  element:<Register/>
  },
  {
  path:"login",
  element:<Login/>
  },
  {
    path:"login2",
    element:<Login2/>
    },
  {
  path:"register1",
  element:<Register1/>
  },
  {
  path:"student",
  element:<Student/>
  }
])

function App() {
  return (
    <div className="container">
      <RouterProvider router={routerConfig}/>
    </div>
  );
}

export default App;

//npm start