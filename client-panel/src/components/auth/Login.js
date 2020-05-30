import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Alert from '../layout/Alert';
import { notifyUser } from '../../actions/notifyAction';

class Login extends Component {
  state = {
    email: '',
    password: '',
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
    const { firebase, notifyUser } = this.props;
    const { email, password } = this.state;

    firebase.login({ email, password }).catch((err) => {
      notifyUser('Invalid Login Credentials', 'error');
      return;
    });
  };
  render() {
    const { email, password } = this.state;
    const { message, messageType } = this.props.notify;
    return (
      <div className='row'>
        <div className='col-md-6 col-lg-6 mx-auto'>
          <div className='card p-2'>
            {message ? (
              <Alert message={message} messageType={messageType}></Alert>
            ) : null}
            <div className='body'>
              <div className='card-bory'>
                <h1 className='text-center pb-4 pt-3'>
                  <span className='text-primary'>
                    <i className='fas fa-lock'></i> Log In
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
                      minLength='3'
                    ></input>
                  </div>
                  <input
                    type='submit'
                    className='btn btn-primary form-control'
                    value='LOGIN'
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
                    <span>Don't have acount?</span>{' '}
                    <Link to='/signup'>Sign Up</Link>
                    <br></br>
                    <Link to='/confirmreset'>Forgot Password?</Link>
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

Login.propTypes = {
  firebase: PropTypes.object.isRequired,
  notify: PropTypes.func.isRequired,
  notifyUser: PropTypes.object.isRequired,
};
export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify,
    }),
    { notifyUser }
  )
)(Login);
