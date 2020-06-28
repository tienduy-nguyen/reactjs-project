import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actDeleteContactRequest } from '../../actions/index';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  showDetail = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteHandler = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    let dispatch = null;
    return (
      <div className='col-xs-12 col-sm-12 col-lg-6 col-md-12'>
        <div className='card text-left mb-3'>
          <h4 className='pb-0 pt-3 ml-3'>
            {name}
            <i
              className='fas fa-sort-down show-info ml-2'
              onClick={this.showDetail}
            ></i>
            <i
              className='fas fa-times mr-2'
              onClick={this.onDeleteHandler.bind(this, id, dispatch)}
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'red',
                fontSize: '18px',
              }}
            ></i>
            <Link to={`contact/edit/${id}`}>
              <i
                className='fas fa-pencil-alt'
                style={{
                  cursor: 'pointer',
                  float: 'right',
                  color: 'black',
                  marginRight: '0.5rem',
                  fontSize: '14px',
                }}
              ></i>
            </Link>
          </h4>
          {showContactInfo ? (
            <div className='card-body pt-0 pb-2'>
              <ul className='list-group'>
                <li className='list-group-item'>Email: {email}</li>
                <li className='list-group-item'>Phone: {phone}</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteContact: (id) => {
      dispatch(actDeleteContactRequest(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Contact);
