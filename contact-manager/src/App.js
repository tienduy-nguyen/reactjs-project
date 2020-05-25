import React from 'react';
import './App.css';
import Contact from './component/Contact';
import Header from './component/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Contact
        name='Jonh Doe'
        email='Jdoe@gmail.com'
        phone='555-555-555'
      ></Contact>
      <Contact
        name='Jonh Smith'
        email='Jsmith@gmail.com'
        phone='333-333-333'
      ></Contact>
    </div>
  );
}

export default App;
