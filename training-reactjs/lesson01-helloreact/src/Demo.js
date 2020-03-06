import React from 'react';
import logo from './logo.svg';
import './Demo.css';

function Demo() {
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to react - learning for TienDuy</h2>
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
      <h1>Hello Reactjs</h1>
      <h2>Welcome to my site created with reactjs</h2>
    </div>
  );
}

export default Demo;
