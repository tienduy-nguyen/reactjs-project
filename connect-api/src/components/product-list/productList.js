import React, { Component } from 'react';

class ProductList extends Component {
  render() {

    return (
          <div className='card'>
            <div className='card-header'>List of products</div>
            <div className='card-body'>
              <table className='table table-bordered table-hover'>
                <thead>
                  <tr>
                    <th className = 'font-weight-bold' scope='col'>#</th>
                    <th className = 'font-weight-bold' scope='col'>Product number</th>
                    <th className = 'font-weight-bold' scope='col'>Product name</th>
                    <th className = 'font-weight-bold' scope='col'>Description</th>
                    <th className = 'font-weight-bold' scope='col'>Price</th>
                    <th className = 'font-weight-bold' scope='col'>Status</th>
                    <th className = 'font-weight-bold' scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {this.props.children}
                </tbody>
              </table>
            </div>
      </div>
    )
  }
}

export default ProductList;