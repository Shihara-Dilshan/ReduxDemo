import logo from "./logo.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {change} from './actions/authActions';

function App() {
  const isLoggedIn = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    // const {auth } = isLoggedIn;
    console.log(isLoggedIn.isLoggedIn)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => {dispatch(change({ASDSd: "sddsd"}))}}>sdsd</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        dfgd
        </a>
      </header>
    </div>
  );
}

export default App;
