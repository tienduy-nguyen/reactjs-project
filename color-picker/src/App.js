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
    //Ta dat 1 state mac dinh color cho app
    this.state = {
      color: 'red',
      fontSize : 12
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSettingsDefault = this.onSettingsDefault.bind(this);
  }

  //De chuyen du lieu tu con sang cha, chung ta su dung va la 1 cai props va nhan lai la 1 function

  onSetColor = (params) =>{
    this.setState({
      color : params
    })
  }

  onChangeSize(value){
    //8<= size <= 36
    if(this.state.fontSize + value >=8 && this.state.fontSize +value <= 36){
      this.setState({
        fontSize : this.state.fontSize + value
      })
    }
  }
  onSettingsDefault(value){
    if(value){
      this.setState({
        color: 'red',
        fontSize: 12
      });
    }
   
  }

  render() {
    return (
      <div className='container mt-50'>

        <div className='row'>
            <ColorPicker color = {this.state.color} onReceiveColor = {this.onSetColor}></ColorPicker>
            <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
              <SizeSettings fontSize = {this.state.fontSize} onChangeSize= {this.onChangeSize}></SizeSettings>
              <Reset onSettingsDefault = {this.onSettingsDefault}></Reset>
            </div>

            <Result color = {this.state.color} fontSize={this.state.fontSize}></Result>

        </div>
      </div>
    )
  }
}

export default App;
