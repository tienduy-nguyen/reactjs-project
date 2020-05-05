import React, { Component } from 'react';


class ProductActionPage extends Component {
    render() {
        return (
            <div className='col-lg-6 col-md-6 col-xs-6 col-sm-6'>
                <form action='' methode='post' role='form'>
                    <legend className='font-weight-bold mb-10'>Add/Edit product: </legend>
                    <div className='form-group'>
                        <label>Name of product</label>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <label>Price: </label>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='form-group'>
                        <label>Status</label>
                    </div>
                    <div class="input-group-text">
                        <input type="checkbox"></input>
                        <label>In stock</label>
                    </div>
                    <button type='submit' className='btn btn-primary'>Save</button>
                </form>
            </div>
        )
    }
}

export default ProductActionPage;