/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './product';

//ES6
class Products extends Component {

    render() {
        const products = [
            {
                id: 1,
                slug: 'iphone',
                name: 'Iphone X',
                price: 3500000
            },
            {
                id: 2,
                slug: 'oppo',
                name: 'Oppo X',
                price: 3500000
            },
            {
                id: 3,
                slug: 'samsung',
                name: 'Samsung X',
                price: 3500000
            },
            {
                id: 4,
                slug: 'iphone',
                name: 'Iphone X Max',
                price: 3500000
            }
        ]
        let { match } = this.props;
        let url = match.url;

        let result = products.map((prod, index) => {
            return (
                <NavLink to={`${url}/${prod.slug}`} key={index}>
                    <li className='list-group-item' >
                        {prod.id} - {prod.name} - {prod.price}
                    </li>
                </NavLink>
            )
        })

        return (
            <div className='container'>
                <h1>Danh sach san pham</h1>
                <div className="row">
                    <ul className='list-group'>
                        {result}
                    </ul>
                </div>
                <div className='row'>
                    <Route path='/products/:name' component={Product}></Route>
                </div>
            </div>

        )
    }
}

export default Products;

