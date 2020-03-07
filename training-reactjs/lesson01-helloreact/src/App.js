import React, { Component } from 'react';
import './App.css';
// import Header from './components/header';
import Product from './components/product';

//ES6
class App extends Component {

  render() {
    var products = [
      {
        id: 1,
        name: 'Samsung Galaxy A50s',
        price: 8000000,
        image: 'https://www.mobile24.fr/images/Samsung-Galaxy-A50-Duos-128GB-Black-8801643759582-08032019-01-p.jpg',
        status: true
      }, {
        id: 2,
        name: 'Samsung Galaxy A20s',
        price: 5000000,
        image: 'https://i0.wp.com/greentech.sn/store/wp-content/uploads/2019/10/Samsung-Galaxy-A20s-blue-bleu.jpg?fit=1000%2C1000&ssl=1',
        status: true
      }, {
        id: 3,
        name: 'iPhone 11 Pro Max',
        price: 30000000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJsg4FdoOsheUFeM2M-fuBxN_ruioucRsLVFGixk6ElX6-r4TISct0BKSIk0UTHRnv8qcTci9L&usqp=CAc',
        status: false
      }, {
        id: 4,
        name: 'Huawei P30 Pro',
        price: 15000000,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51zoW2V0QtL._AC_SX569_.jpg',
        status: true
      }, {
        id: 5,
        name: 'OPPO Reno2 F',
        price: 12000000,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61kk0LWipnL._AC_SX425_.jpg',
        status: false
      }
    ]

    let elements = products.map((product, index) => {
      let result = '';
      if (product.status === true) {
        result = <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
                      <Product
                        key={product.id}
                        price={product.price}
                        image={product.image}
                      >
                        {product.name}
                      </Product>
                </div>
      }
      return result;
    })

    return (
      <div>
        {/* Header */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="/#">Props</a>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/#">Action 1</a>
                  <a className="dropdown-item" href="/#">Action 2</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* Body */}
        <div className='container-fluid'>
          <h1>Xin chào Dammio.</h1>
          <p>Ba cột với chiều rộng bằng nhau.</p>
          <div className='row'>
            {elements}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
