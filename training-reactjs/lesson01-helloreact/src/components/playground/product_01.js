import React, { Component } from 'react';


class Product extends Component {
    render() {
        return (
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div className='thumbnail'>
                    <img className="img-thumbnail img-fluid"
                        src="https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/09/iPhone-11-Pro-Prix.jpg"
                        alt=""></img>
                    <div className='caption'>
                        <h3>Iphone 11 Pro-Max</h3>
                        <p>
                            1299 $
                        </p>
                    </div>
                </div>
                <a name="" id="" className="btn btn-success" href="/#" role="button">Buy</a>
            </div>
        )
    }
}

export default Product;
