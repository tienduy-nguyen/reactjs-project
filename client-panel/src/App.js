import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import AppNavbar from './components/layout/AppNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ConfirmReset from './components/auth/ConfirmReset';
import ResetPassword from './components/auth/ResetPassword';

function App() {
  return (
    <Router>
      <div className='App'>
        <AppNavbar></AppNavbar>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
            <Route exact path='/client/add' component={AddClient}></Route>
            <Route exact path='/client/edit/:id' component={EditClient}></Route>
            <Route exact path='/client/:id' component={ClientDetails}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signup' component={Signup}></Route>
            <Route exact path='/confirmreset' component={ConfirmReset}></Route>
            <Route
              exact
              path='/resetpassword'
              component={ResetPassword}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
