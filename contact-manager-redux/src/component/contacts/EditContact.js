import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import {
  actUpdateContactRequest,
  actGetContactRequest,
} from '../../actions/index';
import { connect } from 'react-redux';

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      phone: '',
      errors: {
        name: '',
        email: '',
        phone: '',
      },
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
    console.log('componenet did mount');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);
    if (nextProps.contactEditing.id !== prevState.id) {
      let { contactEditing } = nextProps;
      return {
        id: contactEditing.id,
        name: contactEditing.name,
        email: contactEditing.email,
        phone: contactEditing.phone,
      };
    }
    return null;
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps && nextProps.contactEditing) {
  //     console.log('component will receive props');
  //     let { contactEditing } = nextProps;
  //     this.setState({
  //       id: contactEditing.id,
  //       name: contactEditing.name,
  //       email: contactEditing.email,
  //       phone: contactEditing.phone,
  //     });
  //   }
  // }

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, id } = this.state;

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
      id: id,
      name: name,
      email: email,
      phone: phone,
    };
    this.props.updateContact(updateContact);

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
      <div className='col-xs-12 col-sm-12 col-lg-6 col-md-12 text-left'>
        <div className='card mb-3'>
          <div className='card-header'>Edit Contact</div>
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
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
  }
}

const mapStateToProps = (state) => {
  return {
    contactEditing: state.contactEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getContact: (id) => {
      dispatch(actGetContactRequest(id));
    },
    updateContact: (contact) => {
      dispatch(actUpdateContactRequest(contact));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
