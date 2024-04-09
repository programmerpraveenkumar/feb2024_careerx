import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';

let routerConfig = createBrowserRouter([
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
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
