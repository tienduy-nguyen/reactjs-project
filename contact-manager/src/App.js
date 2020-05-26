import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import Contacts from './component/contacts/Contacts';
import Header from './component/layout/Header';
import AddContact from './component/contacts/AddContact';
import { Provider } from './Context';

function App() {
  return (
    <Provider>
      <div className='App'>
        <Header></Header>
        <div className='container'>
          <AddContact></AddContact>
          <Contacts></Contacts>
        </div>
      </div>
    </Provider>
  );
}

export default App;
