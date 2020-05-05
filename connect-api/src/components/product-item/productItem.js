import React, { Component } from 'react';


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
                    <span className={`badge ${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td className='text-left'>
                    <button type='button' className='btn btn-primary'>
                        <i className='fas fa-edit mr-2'></i>Edit
                    </button>
                    <button type='button' className='btn btn-warning' onClick={() => this.onDelete(product.id)}>
                        <i className='fas fa-trash-alt mr-2'></i>Delete
                    </button>
                </td>
            </tr>
        )
    };

    onDelete = (id) => {
        if(confirm('Are you sure to delete it?')){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }

}

export default ProductItem;