import React from 'react';
import './App.css';
import './components/home';
import img1 from './assets/img/img1.jpg'

function App() {
  return (
    <div className="App">
      Northside Youth Soccer League
      <img src={img1} alt="kids "/>
    </div>
  );
}

export default App;
