import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import AppNavbar from './components/layout/AppNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';

import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ConfirmReset from './components/auth/ConfirmReset';
import ResetPassword from './components/auth/ResetPassword';
import Settings from './components/settings/Settings';
import NotFound from './components/layout/NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <AppNavbar></AppNavbar>
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              component={UserIsAuthenticated(Dashboard)}
            ></Route>
            <Route
              exact
              path='/client/add'
              component={UserIsAuthenticated(AddClient)}
            ></Route>
            <Route
              exact
              path='/client/edit/:id'
              component={UserIsAuthenticated(EditClient)}
            ></Route>
            <Route
              exact
              path='/client/:id'
              component={UserIsAuthenticated(ClientDetails)}
            ></Route>
            <Route
              exact
              path='/login'
              component={UserIsNotAuthenticated(Login)}
            ></Route>
            <Route
              exact
              path='/signup'
              component={UserIsNotAuthenticated(Signup)}
            ></Route>
            <Route
              exact
              path='/confirmreset'
              component={UserIsNotAuthenticated(ConfirmReset)}
            ></Route>
            <Route
              exact
              path='/resetpassword'
              component={UserIsNotAuthenticated(ResetPassword)}
            ></Route>
            <Route
              exact
              path='/settings'
              component={UserIsAuthenticated(Settings)}
            ></Route>
            <Route component={UserIsNotAuthenticated(NotFound)}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
