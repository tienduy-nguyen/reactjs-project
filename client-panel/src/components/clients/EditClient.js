import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class EditClient extends Component {
  constructor(props) {
    super(props);
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.balanceInput = React.createRef();
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { client, firestore } = this.props;
    const updateClient = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      balance:
        this.balanceInput.current.value === ''
          ? 0
          : this.balanceInput.current.value,
    };
    firestore
      .update({ collection: 'clients', doc: client.id }, updateClient)
      .then(() => {
        this.props.history.push('/');
      });
  };

  render() {
    const { client } = this.props;
    const { disableBalanceOnEdit } = this.props.settings;
    if (client) {
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
              <h4>Edit Client</h4>
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
                    defaultValue={client.firstName}
                    ref={this.firstNameInput}
                    minLength='2'
                    required
                  ></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='lastName'>LastName</label>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Enter LastName'
                    name='lastName'
                    defaultValue={client.lastName}
                    ref={this.lastNameInput}
                    minLength='2'
                    required
                  ></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    className='form-control'
                    type='email'
                    placeholder='Enter Email'
                    name='email'
                    defaultValue={client.email}
                    ref={this.emailInput}
                    minLength='2'
                    required
                  ></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='phone'>Phone</label>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Enter Phone'
                    name='phone'
                    defaultValue={client.phone}
                    ref={this.phoneInput}
                    minLength='2'
                    required
                  ></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='balance'>Balance</label>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Enter Balance'
                    name='balance'
                    defaultValue={client.balance}
                    ref={this.balanceInput}
                    disabled={disableBalanceOnEdit}
                  ></input>
                </div>
                <input
                  type='submit'
                  value='Save'
                  className='btn btn-block btn-primary'
                ></input>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner></Spinner>;
    }
  }
}

EditClient.propTypes = {
  firestore: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect((props) => [
    { collection: 'clients', storeAs: 'client', doc: props.match.params.id },
  ]),
  connect(({ firestore: { ordered }, settings }, props) => ({
    client: ordered.client && ordered.client[0],
    settings,
  }))
)(EditClient);
