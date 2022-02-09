import logo from './logo.svg';
import './App.css';

import {useDispatch} from "react-redux"
import { useEffect } from 'react';
import { loadGames } from './actions/gamesAction';

function App() {

  const dispatch = useDispatch() ;
  useEffect(()=>{
    dispatch(loadGames())
  }) 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello My Dear</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
