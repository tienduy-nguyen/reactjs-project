/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';


//ES6
class Reset extends Component {
  onResetDefault = () =>{
    this.props.onSettingsDefault(true);
  }
  render() {
    return (
        <button type='button' className='btn btn-primary' onClick ={this.onResetDefault}>Reset</button>
    )
  }
}

export default Reset;
