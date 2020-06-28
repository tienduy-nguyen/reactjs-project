import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/product-list/productList';
import ProductItem from '../../components/product-item/productItem';
import { connect } from 'react-redux';
import {
  actFetchProductsRequest,
  actDeleteProductRequest,
} from '../../actions/index';

class ProductListPage extends Component {
  //Lay du lieu tu serve ta su dung life cycle hook
  UNSAFE_componentWillMount() {
    this.props.fetchAllProducts();
  }

  render() {
    let { products } = this.props;
    return (
      <div className='col-lg-12 col-md-12 col-xs-12 col-sm-12'>
        <Link to='product/add' className='btn btn-info mb-4 ml-0'>
          <i className='fas fa-plus mr-2 pd-0'></i>
          Add product
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }

  showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          ></ProductItem>
        );
      });
    }
    return result;
  };

  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
