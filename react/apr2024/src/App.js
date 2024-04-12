import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Users from './Users';

let routerConfig = createBrowserRouter([
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },{
    path:"/user",
    element:<Users/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={routerConfig}/>      
    </div>
  );
}

export default App;
