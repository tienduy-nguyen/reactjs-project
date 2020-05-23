import React, { Component } from 'react';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: 0,
      description: '',
      status: true,
    };
  }

  UNSAFE_componentWillMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      callApi(`products/${id}`, 'GET', null).then((res) => {
        const data = res.data;
        this.setState({
          id: data.id,
          name: data.name,
          price: data.price,
          status: data.status,
          description: data.description,
        });
      });
    }
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    let { history } = this.props;
    let { id, name, price, description, status } = this.state;
    if (id) {
      callApi(`products/${id}`, 'PUT', {
        name: name,
        price: price,
        description: description,
        status: status,
      }).then((res) => {
        history.goBack();
      });
    } else {
      callApi('products', 'POST', {
        name: name,
        price: price,
        description: description,
        status: status,
      }).then((res) => {
        history.goBack();
      });
    }
  };

  render() {
    let { name, price, description, status } = this.state;
    return (
      <div className='col-lg-6 col-md-6 col-xs-6 col-sm-6 product-form__add'>
        <form action='/product/add' methode='post' onSubmit={this.onSave}>
          <legend className='font-weight-bold mb-10'>Add/Edit product: </legend>
          <div className='form-group'>
            <label>Name of product</label>
            <input
              type='text'
              className='form-control'
              name='name'
              value={name}
              onChange={this.onChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Price: </label>
            <input
              type='number'
              className='form-control'
              name='price'
              value={price}
              onChange={this.onChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Description: </label>
            <textarea
              rows='5'
              className='form-control'
              name='description'
              value={description}
              onChange={this.onChange}
            >
              It was a dark and stormy night...
            </textarea>
          </div>
          <div className='form-group'>
            <label>Status</label>
            <div className='input-group-text instock-group'>
              <input
                type='checkbox'
                id='checkInStock'
                className='instock-group__checkbox'
                name='status'
                value={status}
                checked={!!status}
                onChange={this.onChange}
              ></input>
              <label htmlFor='checkInStock' className='instock-group__label'>
                In stock
              </label>
            </div>
          </div>
          <Link to='/products' className='btn btn-info'>
            Go back
          </Link>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
