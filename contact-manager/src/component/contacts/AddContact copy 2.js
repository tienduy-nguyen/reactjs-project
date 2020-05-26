import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = (event) => {
    event.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };
  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@gmail.com',
    phone: '777-777-7777',
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className='col-xs-12 col-sm-12 col-lg-6 col-md-12 text-left'>
        <div className='card mb-3'>
          <div className='card-header'>AddContact</div>
          <div className='card-body'>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  className='form-control form-control-lg'
                  type='text'
                  placeholder='Enter name...'
                  name='name'
                  defaultValue={name}
                  ref={this.nameInput}
                ></input>
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  className='form-control form-control-lg'
                  type='email'
                  placeholder='Enter email...'
                  name='email'
                  defaultValue={email}
                  ref={this.emailInput}
                ></input>
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input
                  className='form-control form-control-lg'
                  type='text'
                  placeholder='Enter phone...'
                  name='phone'
                  defaultValue={phone}
                  ref={this.phoneInput}
                ></input>
              </div>
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

export default AddContact;
