import React, { Component } from 'react';
import './App.css';
// import Header from './components/header';
import Product from './components/product';

//ES6
class App extends Component {

  constructor(props) {
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  onAddToCart() {
    alert(this.props.children);
  }

  onAddToCart2 = () => {
    alert(`${this.props.children} - ${this.props.price}`);
  }

  onAddProduct() {
    console.log(this.refs);
  }
  onAddProduct2= () => {
    console.log(this.refs.name.value);
  }

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
        result = <div className='col-md-4' key={product.id}>
          <Product
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

        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/#">Disabled</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="/#">Action</a>
                  <a className="dropdown-item" href="/#">Another action</a>
                  <a className="dropdown-item" href="/#">Something else here</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <main role="main">
          {/* Body */}
          {/* <!-- Main jumbotron for a primary marketing message or call to action --> */}
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Hello, world!</h1>
              <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
              <p><a className="btn btn-primary btn-lg" href="/#" role="button">Learn more &raquo;</a></p>
            </div>
          </div>

          <div className='container'>
            <div>
              <div className='row'>

                  <div className='col-md-12'>
                        <div className="card">
                          <div className="card-header">
                            <h3 className='panel-title'>Add new product</h3>
                          </div>
                          <div className="card-body">
                                  <div className='form-group'>
                                    <label htmlFor=''>Product name</label>
                                    <input type='text' className='form-control' ref='name'></input>
                                  </div>
                                  <button type='submit' className='btn btn-primary' onClick={this.onAddProduct}>Save</button>
                                  <button type='submit' className='btn btn-primary' onClick={this.onAddProduct2}>Save2</button>
                          </div>
                        </div>
                
                <div className='row'>
                  {elements}
                </div>

                <div className ='row'>
                  <div className='col-md-12'>
                    <button type='button' className='btn btn-warning' onClick={this.onAddToCart2}>Click me!</button>
                    <button type='button' className='btn btn-warning' onClick={this.onAddToCart}>Click me!</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </div>
        </main>

        <footer className="container">
          <p>&copy; TienDuy 2020-2021</p>
        </footer>

      </div>
    )
  }
}

export default App;
