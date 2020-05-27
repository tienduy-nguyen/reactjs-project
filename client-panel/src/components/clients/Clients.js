import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: '434344344',
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',
        phone: '555-555-5555',
        balance: '30',
      },
      {
        id: '661616',
        firstName: 'Karen',
        lastName: 'Smith',
        email: 'kSmith@gmail.com',
        phone: '555-555-5556',
        balance: '1000',
      },
    ];

    if (clients) {
      return (
        <div>
          <div className='row'>
            <div className='col-md-6'>
              <h2>
                {' '}
                <i className='fas fa-users'></i> Clients{' '}
              </h2>
            </div>
            <div className='col-md-6'></div>
          </div>
          <table className='table table-striped'>
            <thead className='thead-inverse'>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Balance</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr key={index}>
                  <td scope='row'>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className='btn btn-secondary btn-sm'
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
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
