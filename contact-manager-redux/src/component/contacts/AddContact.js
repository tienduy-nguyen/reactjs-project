import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import { actAddContactRequest } from '../../actions/index';
import { connect } from 'react-redux';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {
      name: '',
      email: '',
      phone: '',
    },
  };

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (dispatch, event) => {
    event.preventDefault();
    const { name, email, phone } = this.state;

    //Check for error
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email.trim() === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    this.props.addContact(newContact);

    //Clear form
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {
        name: '',
        email: '',
        phone: '',
      },
    });
    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;
    let dispatch = null;
    return (
      <div className='col-xs-12 col-sm-12 col-lg-6 col-md-12 text-left'>
        <div className='card mb-3'>
          <div className='card-header'>AddContact</div>
          <div className='card-body'>
            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
              <TextInputGroup
                label='Name'
                placeholder='Enter name ...'
                name='name'
                value={name}
                onChange={this.onChange}
                error={errors.name}
              ></TextInputGroup>
              <TextInputGroup
                label='Email'
                type='email'
                placeholder='Enter email ...'
                name='email'
                value={email}
                onChange={this.onChange}
                error={errors.email}
              ></TextInputGroup>
              <TextInputGroup
                label='Phone'
                placeholder='Enter phone ...'
                name='phone'
                value={phone}
                onChange={this.onChange}
                error={errors.phone}
              ></TextInputGroup>
              <input
                type='submit'
                value='Add Contact'
                className='btn btn-block btn-light'
              ></input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addContact: (contact) => {
      dispatch(actAddContactRequest(contact));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddContact);
