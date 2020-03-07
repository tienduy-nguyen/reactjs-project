import React, { Component } from 'react';

class Product extends Component{
    render(){
        return(
                <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
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
                                <a className = 'btn btn-primary' href='/#'>Buy</a>
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Product;