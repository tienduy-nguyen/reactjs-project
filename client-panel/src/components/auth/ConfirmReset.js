import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {compose} from 'redux';
// import {connect} from 'react-redux';
// import { firebaseConnect } from 'react-redux-firebase';

class ResetPassword extends Component {
  state = {
    email: '',
  };

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    const { email } = this.state;
    return (
      <div className='row'>
        <div className='col-md-6 col-lg-6 mx-auto'>
          <div className='card p-2'>
            <div className='body'>
              <div className='card-bory'>
                <div className='text-center pb-4 pt-3'>
                  <span>
                    To reset your password, enter the email address you use to
                    sign in.
                  </span>
                </div>
                <form onSubmit={this.onSubmit}>
                  <div className='input-group mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>
                        <i className='far fa-envelope'></i>
                      </span>
                    </div>
                    <input
                      className='form-control'
                      type='email'
                      name='email'
                      placeholder='Email Address'
                      value={email}
                      autoComplete='email'
                      onChange={this.onChange}
                      required
                    ></input>
                  </div>
                  <input
                    type='submit'
                    className='btn btn-primary form-control'
                    value='Get Reset Link'
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ResetPassword;
