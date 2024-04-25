import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Users from './Users';
import Contact2 from './Contact2';

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
    element:<Contact2/>
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
