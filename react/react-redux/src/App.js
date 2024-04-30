import './App.css';
import { Provider } from 'react-redux';
import { myStore } from './redux/config';
import Home from './Home';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

const routerConfig= createBrowserRouter([
  {
    path:"home",
    element:<Home/>
  }, {
    path:"about",
    element:<About/>
  }, {
    path:"contact",
    element:<Contact/>
  }]
)


function App() {
  return (
    <Provider store={myStore}>
    <div className="App">
      <RouterProvider router={routerConfig}/>
    </div>
    </Provider>
  );
}

export default App;
