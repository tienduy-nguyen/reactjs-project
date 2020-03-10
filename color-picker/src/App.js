/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSettings from './components/SizeSettings';

//ES6
class App extends Component {
  render() {
    return (
      <div className='container mt-50'>

        <div className='row'>
            <ColorPicker></ColorPicker>
            <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
              <SizeSettings></SizeSettings>
              <Reset></Reset>
            </div>

            <Result></Result>

        </div>
      </div>
    )
  }
}

export default App;
