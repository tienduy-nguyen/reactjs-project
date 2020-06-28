import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class Clients extends Component {
  state = {
    totalOwed: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;
    if (clients) {
      //Add balances
      const total = clients.reduce((total, client) => {
        return total + parseFloat(client.balance.toString());
      }, 0);
      return { totalOwed: total };
    }
    return null;
  }

  render() {
    const { clients } = this.props;
    const { totalOwed } = this.state;
    if (clients) {
      return (
        <div>
          <div className='row'>
            <div className='col-md-6 col-lg-6'>
              <h2>
                {' '}
                <i className='fas fa-users'></i> Clients{' '}
              </h2>
            </div>
            <div className='col-md-6 col-lg-6'>
              <h5
                className='text-right text-secondary'
                style={{
                  padding: '0px',
                  verticalAlign: 'bottom',
                  marginTop: '0px',
                  marginBottom: '0px',
                }}
              >
                Total owed{' '}
                <span className='text-primary'>
                  ${parseFloat(totalOwed).toFixed(2)}
                </span>{' '}
              </h5>
            </div>
          </div>
          <table className='table table-striped'>
            <thead className='thead-inverse'>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className='btn btn-secondary btn-sm float-right'
                    >
                      <i className='fas fa-arrow-circle-right'></i> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner></Spinner>;
    }
  }
}

Clients.propsTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array,
};

export default compose(
  firestoreConnect(() => ['clients']), // sync clients collection from Firestore into redux
  connect((state) => ({
    clients: state.firestore.ordered.clients,
  }))
)(Clients);
