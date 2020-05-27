import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import AppNavbar from './components/layout/AppNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <Router>
      <div className='App'>
        <AppNavbar></AppNavbar>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Dashboard}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
