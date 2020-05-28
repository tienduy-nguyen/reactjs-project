import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class ClientDetails extends Component {
  state = {
    showBalanceUpdate: false,
    balanceUpdateAmout: 0.0,
  };

  onChangeBalanceForm = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //Update balance
  onSubmitBalance = (event) => {
    event.preventDefault();
    const { client, firestore } = this.props;
    const { balanceUpdateAmout } = this.state;
    const clientUpdate = {
      balance: parseFloat(balanceUpdateAmout),
    };
    //Update in firestore
    firestore.update({ collection: 'clients', doc: client.id }, clientUpdate);
  };

  //Delete client
  onDeleteClient = () => {
    const { client, firestore } = this.props;
    firestore
      .delete({ collection: 'clients', doc: client.id })
      .then(() => this.props.history.push('/'));
  };
  render() {
    const { client } = this.props;
    const { showBalanceUpdate, balanceUpdateAmout } = this.state;
    let balanceForm = '';
    if (showBalanceUpdate) {
      balanceForm = (
        <form onSubmit={this.onSubmitBalance}>
          <div className='input-group'>
            <input
              type='number'
              className='form-control'
              name='balanceUpdateAmout'
              placeholder='Add new balance'
              value={balanceUpdateAmout}
              onChange={this.onChangeBalanceForm}
            ></input>
            <div className='input-group-append'>
              <input
                type='submit'
                value='Update'
                className='btn btn-dark'
              ></input>
            </div>
          </div>
        </form>
      );
    } else {
      balanceForm = null;
    }

    if (client) {
      return (
        <div>
          <div className='row'>
            <div className='col-md-6 col-lg-6'>
              <Link to='/' className='btn btn-link'>
                <i className='fas fa-arrow-circle-left'></i> Back to Dashboard
              </Link>
            </div>
            <div className='col-md-6 col-lg-6'>
              <div className='btn-group float-right'>
                <Link to={`/client/edit/${client.id}`} className='btn btn-dark'>
                  Edit
                </Link>
                <button
                  className='btn btn-danger'
                  onClick={this.onDeleteClient}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className='card'>
            <div className='card-header'>
              <h3>
                {client.firstName} {client.lastName}
              </h3>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-8 col-lg-8 col-sm-6'>
                  <h5>
                    Client ID:{' '}
                    <span className='text-secondary'>{client.id}</span>
                  </h5>
                </div>
                <div className='col-md-4 col-lg-4 col-sm-6'>
                  <h4 className='pull-right'>
                    Balance:{' '}
                    <span
                      className={
                        client.balance > 0 ? 'text-danger' : 'text-success'
                      }
                    >
                      ${parseFloat(client.balance).toFixed(2)}
                    </span>
                    <small>
                      <a
                        href='#!'
                        className='ml-2'
                        onClick={() =>
                          this.setState({
                            showBalanceUpdate: !this.state.showBalanceUpdate,
                          })
                        }
                      >
                        <i className='fas fa-pencil-alt'></i>
                      </a>
                    </small>
                  </h4>
                  {balanceForm}
                </div>
              </div>

              {/* Todo - balance form */}

              <hr></hr>
              <ul className='list-group'>
                <li className='list-group-item'>
                  Contact Email: {client.email}
                </li>
                <li className='list-group-item'>
                  Contact Phone: {client.phone}
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner></Spinner>;
    }
  }
}

ClientDetails.propTypes = {
  firestore: PropTypes.object.isRequired,
};

export default compose(
  firestoreConnect((props) => [
    { collection: 'clients', storeAs: 'client', doc: props.match.params.id },
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    client: ordered.client && ordered.client[0],
  }))
)(ClientDetails);
