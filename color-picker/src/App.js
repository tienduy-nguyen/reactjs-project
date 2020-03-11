/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSettings from './components/SizeSettings';

//ES6
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize : 15
    };
    // this.onSetColor = this.onSetColor.bind(this);
  }

  //De chuyen du lieu tu con sang cha, chung ta su dung va la 1 cai props va nhan lai la 1 function

  onSetColor = (params) =>{
    this.setState({
      color : params
    })
  }

  render() {
    return (
      <div className='container mt-50'>

        <div className='row'>
            <ColorPicker color = {this.state.color} onReceiveColor = {this.onSetColor}></ColorPicker>
            <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
              <SizeSettings></SizeSettings>
              <Reset></Reset>
            </div>

            <Result color = {this.state.color}></Result>

        </div>
      </div>
    )
  }
}

export default App;
