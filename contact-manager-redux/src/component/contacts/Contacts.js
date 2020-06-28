import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { actFetchContactsRequest } from '../../actions/index';
import PropTypes from 'prop-types';

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className='display-4 mb-2'>
          <span className='text-danger'>Contact List</span>
        </h1>
        {contacts.map((contact, index) => (
          <Contact contact={contact} key={index}></Contact>
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  fetchContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchContacts: () => {
      dispatch(actFetchContactsRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
