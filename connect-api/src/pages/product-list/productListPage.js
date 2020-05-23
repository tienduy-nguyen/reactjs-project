import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/product-list/productList';
import ProductItem from '../../components/product-item/productItem';
import { connect } from 'react-redux';
import callApi from '../../utils/apiCaller';
import { actFetchProductsRequest } from '../../actions/index';

class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

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
    callApi(`products/${id}`, 'DELETE', null).then((res) => {
      //Sau khi callAPI thi tren server se xoa, tuy nhien ta can xoa ca trong mang
      let products = this.state.products;
      if (res.status === 200) {
        let index = -1;
        index = this.findIndex(products, id);
        if (index >= 0) {
          products.splice(index, 1);
        }
      }
      this.setState({
        products: products,
      });
    });
  };

  findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        return (result = index);
      }
    });
    return result;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
