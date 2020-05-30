import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import {compose} from 'redux';
// import {connect} from 'react-redux';
// import { firebaseConnect } from 'react-redux-firebase';

class Signup extends Component {
  state = {
    email: '',
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
    const { email, password, confirmPassword } = this.state;
    console.log('submit');
    if (password !== confirmPassword) return;

    const { firebase } = this.props;

    firebase
      .login({ email, password })
      .catch((err) => alert('Invalid Login Credentials'));

    //Clear form
    this.setState({
      name: '',
      email: '',
      errors: {
        confirmPassword: '',
      },
    });
    this.props.history.push('/');
  };
  render() {
    const { email, password, confirmPassword, errors } = this.state;
    const errConfirmPassword = errors.confirmPassword;
    return (
      <div className='row'>
        <div className='col-md-6 col-lg-6 mx-auto'>
          <div className='card p-2'>
            <div className='body'>
              <div className='card-bory'>
                <h1 className='text-center pb-4 pt-3'>
                  <span className='text-primary'>
                    <i className='fas fa-user-plus'></i> Sign Up
                  </span>
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className='input-group mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text' id='basic-addon1'>
                        <i className='far fa-envelope'></i>
                      </span>
                    </div>
                    <input
                      className='form-control'
                      type='email'
                      name='email'
                      placeholder='Enter Email'
                      value={email}
                      autoComplete='email'
                      onChange={this.onChange}
                      required
                      aria-label='Email'
                      aria-describedby='basic-addon1'
                    ></input>
                  </div>
                  <div className='input-group mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>
                        <i className='fas fa-key'></i>
                      </span>
                    </div>
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
                  <div className='input-group mb-4'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>
                        <i className='fas fa-key'></i>
                      </span>
                    </div>
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
                    value='SIGNUP'
                  ></input>
                </form>
                <div className='text-center mx-auto mt-2'>
                  <span>Or</span>
                  <br></br>
                  <div className='social-auth d-flex text-center'>
                    <a href='#!' className='btn-li mx-1'>
                      <i className='fab fa-facebook btn-floating btn-fa'></i>
                    </a>
                    <a href='#!' className=' btn-li mx-1'>
                      <i className='fab fa-google-plus btn-floating btn-ggs'></i>
                    </a>
                    <a href='#!' className=' btn-li mx-1'>
                      <i className='fab fa-twitter btn-floating btn-tw'></i>
                    </a>
                    <a href='#!' className=' btn-li mx-1'>
                      <i className='fab fa-github btn-floating btn-gh'></i>
                    </a>
                  </div>
                </div>
                <div className='text-center mx-auto mt-4'>
                  <small>
                    <span>Have already account?</span>{' '}
                    <Link to='/login'>Log In</Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
