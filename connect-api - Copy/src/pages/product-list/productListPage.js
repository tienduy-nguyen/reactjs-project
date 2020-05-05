import React, { Component } from 'react';
import ProductList from '../../components/product-list/productList';
import ProductItem from '../../components/product-item/productItem';


class ProductListPage extends Component {
    render() {
        let products = [
            {
                id: 'id1',
                name:'Iphone',
                description: 'Made by Apple',
                price: 15000000,
                status: true
            },
            {
                id: 'id1',
                name:'Iphone',
                description: 'Made by Apple',
                price: 15000000,
                status: true
            },
            {
                id: 'id1',
                name:'Iphone',
                description: 'Made by Apple',
                price: 15000000,
                status: false
            },
            {
                id: 'id1',
                name:'Iphone',
                description: 'Made by Apple',
                price: 15000000,
                status: false
            }
        ];

        return (
            <div className='col-lg-12 col-md-12 col-xs-12 col-sm-12'>
                <button type='button' className='btn btn-info mb-4 ml-0'>
                    <i className='fas fa-plus mr-2 pd-0'></i>
            Add product
            </button>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        )
    }

    showProducts = (products) =>{
        let result = null;
        if(products.length > 0){
            result  = products.map((product, index) =>{
                return(
                  <ProductItem
                  key={index}
                  product = {product}
                  index ={index}
                  ></ProductItem>
                )
            })
        }
        return result;
    }
}

export default ProductListPage;