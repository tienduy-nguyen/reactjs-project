import React, { Component } from 'react';

class Product extends Component{
onAddToCart(text){
    console.log(text);
    alert(text);
}

    render(){
        return(
                <div >
                    <div>
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
                                <a className = 'btn btn-primary' onClick={() => this.onAddToCart(this.props.children)} href='/#'>Buy</a>
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Product;