import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };
  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  render() {
    const { name, email, phone } = this.state;
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
                  value={name}
                  onChange={this.onChange}
                ></input>
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  className='form-control form-control-lg'
                  type='email'
                  placeholder='Enter email...'
                  name='email'
                  value={email}
                  onChange={this.onChange}
                ></input>
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input
                  className='form-control form-control-lg'
                  type='text'
                  placeholder='Enter phone...'
                  name='phone'
                  value={phone}
                  onChange={this.onChange}
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
