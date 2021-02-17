import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { notifyUser } from '../../actions/notifyAction';
import Alert from '../layout/Alert';
import PropTypes from 'prop-types';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
      confirmPassword: '',
    },
  };

  componentWillMount() {
    const { allowRegistration } = this.props.settings;
    if (!allowRegistration) {
      this.props.history.push('/');
    }
  }

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
    const { firebase, notifyUser } = this.props;
    if (password !== confirmPassword) return;

    firebase.createUser({ email, password }).catch((err) => {
      notifyUser('That user already exists', 'error');
      return;
    });
    // this.props.history.push('/');
  };
  render() {
    const { email, password, confirmPassword, errors } = this.state;
    const { message, messageType } = this.props.notify;
    const errConfirmPassword = errors.confirmPassword;
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

Signup.propTypes = {
  firebase: PropTypes.object.isRequired,
  notify: PropTypes.func.isRequired,
  notifyUser: PropTypes.object.isRequired,
};

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify,
      settings: state.settings,
    }),
    { notifyUser }
  )
)(Signup);
