import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import './App.css'
import Concepts from "./Concepts";
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