/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/menu/menu';
import routes from './routes';


class App extends Component {

  showContentMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact} component={route.main}>
          </Route>
        )
      })
    }
    return result;
  }
  render() {

    return (
      <Router>
        <div className='app'>
          <Menu></Menu>
          <div className='container mt-15'>
            <div className='row'>
              <Switch>
              {this.showContentMenu(routes)}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
