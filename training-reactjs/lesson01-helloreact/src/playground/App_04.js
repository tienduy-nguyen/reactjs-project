import React, { Component } from 'react';
import './App.css';
// import Header from './components/header';
import Product from './components/product';

//ES6
class App extends Component {

  render() {
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
              <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
                <Product
                  name='Iphone 11 Pro Max'
                  price='15000000'
                  image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567808544078'
                />
              </div>
              <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
                <Product
                  name='Iphone 11 Pro Max'
                  price='15000000'
                  image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567808544078'
                />
              </div>
              <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
                <Product
                  name='Iphone 11 Pro Max'
                  price='15000000'
                  image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567808544078'
                />
              </div>

            </div>
          </div>
        {/* <div class="container-fluid">
          <h1>Xin chào Dammio!</h1>
          <p>Thu phóng kích thước trình duyệt để xem sự thay đổi bố cục.</p>
          <p>Bốn cột sẽ chồng lên nhau ở kích thước màn hình bé hơn 576px.</p>
          <div class="row">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3">.col-sm-3</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3" >.col-sm-3</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3" >.col-sm-3</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3" >.col-sm-3</div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default App;
