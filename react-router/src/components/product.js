/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';

//ES6
class Product extends Component {
    render() {
        let {match} = this.props;
        let name = match.params.name;
        return (
            <h1>
               Day la trang chi tiet san pham : {name}
            </h1>
        )
    }
}

export default Product;

