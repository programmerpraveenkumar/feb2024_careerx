import './App.css';
import { Provider } from 'react-redux';
import { storeVal } from './redux/config';
import Home from './Home';



function App() {
  return (
    <Provider store={storeVal}>
    <div className="App">
      <h1>Redux </h1>
      <Home/>
    </div>
    </Provider>
  );
}

export default App;
