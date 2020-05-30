import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class AddClient extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: '',
  };
  onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const newClient = this.state;
    const { firestore } = this.props;
    if (newClient.balance === '') {
      newClient.balance = 0;
    }
    firestore.add({ collection: 'clients' }, newClient).then(() => {
      this.props.history.push('/');
    });
  };
  render() {
    const { firstName, lastName, email, phone, balance } = this.state;
    const { disableBalanceOnAdd } = this.props.settings;
    return (
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <Link to='/' className='btn btn-link'>
              <i className='fas fa-arrow-circle-left'></i> Back to Dashboard
            </Link>
          </div>
        </div>
        <div className='card'>
          <div className='card-header'>
            <h4>Add Client</h4>
          </div>
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='firstName'>FirstName</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Enter FirstName'
                  name='firstName'
                  value={firstName}
                  minLength='2'
                  required
                  onChange={this.onChange}
                ></input>
              </div>
              <div className='form-group'>
                <label htmlFor='lastName'>LastName</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Enter LastName'
                  name='lastName'
                  value={lastName}
                  minLength='2'
                  required
                  onChange={this.onChange}
                ></input>
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  className='form-control'
                  type='email'
                  placeholder='Enter Email'
                  name='email'
                  value={email}
                  minLength='2'
                  required
                  onChange={this.onChange}
                ></input>
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Enter Phone'
                  name='phone'
                  value={phone}
                  minLength='2'
                  required
                  onChange={this.onChange}
                ></input>
              </div>
              <div className='form-group'>
                <label htmlFor='balance'>Balance</label>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Enter Balance'
                  name='balance'
                  value={balance}
                  onChange={this.onChange}
                  disabled={disableBalanceOnAdd}
                ></input>
              </div>
              <input
                type='submit'
                value='Submit'
                className='btn btn-block btn-primary'
              ></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddClient.propTypes = {
  firestore: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect(),
  connect((state, props) => ({
    settings: state.settings,
  }))
)(AddClient);
