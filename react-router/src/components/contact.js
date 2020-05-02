/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';


//ES6
class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked :false
        }
    }
    onClick = (isChecked) =>{
        this.setState({
            isChecked : isChecked
        })
    }

    render() {
        let {isChecked} = this.state;
        return (
            <div style={{marginTop: 100}}>
               Day la trang contact <br/>
               <button type='button' className='btn btn-info' onClick={() => this.onClick(false)}>Cho phep</button>
               <button type='button' className='btn btn-danger'  onClick={() => this.onClick(true)}>Khong Cho phep</button>
                <Prompt
                    when = {isChecked}
                    message={location => (`Ban chac chan muon di den ${location.pathname}`)}
                ></Prompt>
            </div>
        )
    }
}

export default Contact;
