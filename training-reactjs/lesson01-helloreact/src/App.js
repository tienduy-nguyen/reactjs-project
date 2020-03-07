import React, { Component } from 'react';
import './App.css';
// import Header from './components/header';
// import Product from './components/product';

//ES6
class App extends Component {

  render() {
    return (
      <div>
        {/* Header */}
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="/#">Props</a>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/#">Action 1</a>
                  <a className="dropdown-item" href="/#">Action 2</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* Body */}
        <div>
        
        </div>
      </div>

    )
  }
}

export default App;
