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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
