/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import './App.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/notFound';
import Nav from './components/nav';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          {/* Menu */}
          <Nav></Nav>
          <div className="container">
            {/* Noi dung         */}
            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/contact' exact component={Contact}></Route>
              <Route path='/about' exact component={About}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>

      </Router>
    )
  }
}

export default App;
