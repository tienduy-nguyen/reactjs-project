import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {compose} from 'redux';
// import {connect} from 'react-redux';
// import { firebaseConnect } from 'react-redux-firebase';

class ResetPassword extends Component {
  state = {
    password: '',
    confirmPassword: '',
    errors: {
      confirmPassword: '',
    },
  };

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'confirmPassword') {
      //Check password and confirm password
      if (this.state.password !== value) {
        this.setState({
          errors: { confirmPassword: 'Password not matching' },
        });
      } else {
        this.setState({
          errors: { confirmPassword: '' },
        });
      }
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    console.log('submit');
    if (password !== confirmPassword) return;

    // const { firebase } = this.props;
  };
  render() {
    const { password, confirmPassword, errors } = this.state;
    const errConfirmPassword = errors.confirmPassword;
    return (
      <div className='row'>
        <div className='col-md-6 col-lg-6 mx-auto'>
          <div className='card p-2'>
            <div className='body'>
              <div className='card-bory'>
                <h1 className='text-center pb-4 pt-3'>
                  <span className='text-primary'>Change Password</span>
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <label htmlFor='password'>New Password</label>
                    <input
                      className='form-control'
                      type='password'
                      name='password'
                      placeholder='Enter Password'
                      value={password}
                      autoComplete='current-password'
                      onChange={this.onChange}
                      required
                    ></input>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input
                      className={`form-control ${
                        errConfirmPassword ? 'is-invalid' : ''
                      }`}
                      type='password'
                      name='confirmPassword'
                      placeholder='Confirm Password'
                      value={confirmPassword}
                      autoComplete='current-password'
                      onChange={this.onChange}
                      required
                    ></input>
                    {errConfirmPassword && (
                      <div className='invalid-feedback'>
                        {errConfirmPassword}
                      </div>
                    )}
                  </div>
                  <input
                    type='submit'
                    className='btn btn-primary form-control'
                    value='UPDATE PASSWORD'
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
