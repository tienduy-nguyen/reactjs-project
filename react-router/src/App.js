/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import routes from './routes';
import Nav from './components/nav';


class App extends Component {
  showContentMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}>
          </Route>
        )
      }
      )
    }
    return result;
  }

  render() {
    return (
      <Router>
        <div className="app">
          {/* Menu */}
          <Nav></Nav>
          <div className="container">
            {/* Noi dung         */}
            <Switch>
              {this.showContentMenu(routes)}
            </Switch>
          </div>
        </div>

      </Router>
    )
  }
}

export default App;
