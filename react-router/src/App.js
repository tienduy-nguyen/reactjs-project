/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route as Route } from 'react-router-dom'
import './App.css';

//ES6
class App extends Component {
  render() {
    return (
      <div className="app">
      {/* Menu */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default App;
