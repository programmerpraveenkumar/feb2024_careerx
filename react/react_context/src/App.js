import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { Context } from './config/ContexConfig';
import { useState } from 'react';


function App() {
  const [name,setName] = useState('from app.js');
  return (
    <Context.Provider value={{name,setName}}>
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
    </Context.Provider>
  );
}

export default App;
