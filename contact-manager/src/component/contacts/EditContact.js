import React, { Component } from 'react';
import { Consumer } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
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

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = async (dispatch, event) => {
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
    const updateContact = {
      name: name,
      email: email,
      phone: phone,
    };

    const { id } = this.props.match.params;
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );
    dispatch({ type: 'EDIT_CONTACT', payload: res.data });

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
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='col-xs-12 col-sm-12 col-lg-6 col-md-12 text-left'>
              <div className='card mb-3'>
                <div className='card-header'>Edit Contact</div>
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
                      value='Update Contact'
                      className='btn btn-block btn-light'
                    ></input>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
