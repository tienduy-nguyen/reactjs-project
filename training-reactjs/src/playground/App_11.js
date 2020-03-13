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
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/#">State</a>
          {/* State de luu lai gia tri can thiet cua component */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/#">Disabled</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="/#">Action</a>
                  <a className="dropdown-item" href="/#">Another action</a>
                  <a className="dropdown-item" href="/#">Something else here</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <main role="main">
          <div className='container'>
            <div>
              
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
