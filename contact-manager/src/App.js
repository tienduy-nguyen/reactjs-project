import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import Contacts from './component/Contacts';
import Header from './component/Header';
import { Provider } from './Context';

function App() {
  return (
    <Provider>
      <div className='App'>
        <Header></Header>
        <div className='container'>
          <Contacts></Contacts>
        </div>
      </div>
    </Provider>
  );
}

export default App;
