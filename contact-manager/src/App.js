import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import Contacts from './component/contacts/Contacts';
import Header from './component/layout/Header';
import AddContact from './component/contacts/AddContact';
import About from './component/pages/About';
import NotFound from './component/pages/NotFoundPage';
import { Provider } from './Context';

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Header></Header>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Contacts}></Route>
              <Route exact path='/contact/add' component={AddContact}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
