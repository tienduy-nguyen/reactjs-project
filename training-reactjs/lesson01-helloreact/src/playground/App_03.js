import React, { Component } from 'react';
import './App.css';
// import Header from './components/header';
// import Product from './components/product';

//ES6
class App extends Component {

  showInfoProduct(product) {
    if (product.status) {
      return (
        <h3>
          ID : {product.id}<br />
          Name : {product.name}<br />
          Price : {product.price} VND <br />
          Status : {product.status ? 'Active' : 'Pending'}
        </h3>
      )
    }
  }


  render() {
    const a = 5;
    const name = 'nghiepuit';
    const b = 7;
    const product = {
      id: 1,
      name: 'Iphone 7 plus',
      price: 15000000,
      status: true
    }
    var users = [
      {
        id: 1,
        name: 'Nguyen Van A',
        age :18
      },
      {
        id: 2,
        name: 'Nguyen Van B',
        age :24
      },
      {
        id: 3,
        name: 'Nguyen Van C',
        age :30
      }
    ]
    
    var element = users.map((user,index) => {
        return(
            <div key = {user.id}>
              <h2>Name : {user.name}</h2>
              <p>Age : {user.age}</p>
            </div>
        )
    })

    return (
      <div>
        {/* Header */}
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="/#">Navbar</a>
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
        <div className="Ml-30">
          <h2>
            a: {a} <br />
            b: {b} <br />
            a + b = {a + b} <br />
          </h2>
          <h3>
            name : {name}
          </h3>
            {this.showInfoProduct(product)}
            <br/>
            <hr/>
            { element }
        </div>
      </div>

    )
  }
}

export default App;
