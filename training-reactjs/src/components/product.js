import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
    }

    onAddToCart() {
        alert(this.props.children);
    }

    onAddToCart2 = () => {
        alert(`${this.props.children} - ${this.props.price}`);
    }

    render() {
        return (
            <div >
                <img className='img-thumbnail img-fluid'
                    alt={this.props.name}
                    src={this.props.image}></img>
                <div className='caption'>
                    <h4>
                        {this.props.children}
                    </h4>
                    <p>
                        {this.props.price} VND
                            </p>
                    <p>
                        <a className='btn btn-primary' onClick={this.onAddToCart2} href='/#'>Buy</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Product;