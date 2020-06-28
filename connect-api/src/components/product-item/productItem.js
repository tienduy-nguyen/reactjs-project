import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    let { product, index } = this.props;
    let statusName = product.status ? 'In stock' : 'Not available';
    let statusClass = product.status ? 'badge-success' : 'badge-light';
    return (
      <tr>
        <th scope='row'>{index + 1}</th>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}đ</td>
        <td className='text-center'>
          <span className={`badge ${statusClass}`}>{statusName}</span>
        </td>
        <td className='text-middle'>
          <Link to={`/product/${product.id}/edit`}>
            <i className='fas fa-edit mr-2 text-primary'></i>
          </Link>
          <i
            style={{ cursor: 'pointer' }}
            onClick={() => this.onDelete(product.id)}
            className='fas fa-trash-alt text-danger'
          ></i>
        </td>
      </tr>
    );
  }

  onDelete = (id) => {
    if (window.confirm('Are you sure to delete it?')) {
      //eslint-disable-line
      this.props.onDelete(id);
    }
  };
}

export default ProductItem;
