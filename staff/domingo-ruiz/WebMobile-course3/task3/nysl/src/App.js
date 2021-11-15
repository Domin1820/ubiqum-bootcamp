import React from 'react';
import './App.css';
import './components/home';
import "bootstrap/dist/css/bootstrap.css";
import {NavBar} from './components/home';
import {BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
import {Swap} from './components/switching'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Swap/>
      </div>
    </Router>

  );
}



export default App;
