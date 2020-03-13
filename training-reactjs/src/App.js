/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import './App.css';


//ES6
class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/#">State</a>
          {/* State de luu lai gia tri can thiet cua component */}
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
          <div className='container mt-100'>
            <div className='row'>
              <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
                <div className="card">

                  <h5 className="card-header text-white bg-info mb-3 text-center py-4">
                    <strong>Sign in</strong>
                  </h5>

                  {/* <!--Card content--> */}
                  <div className="card-body px-lg-5 pt-0 mt-10">

                    {/* <!-- Form --> */}
                    <form className="text-center" color= "#757575" action="#!">

                      {/* <!-- Email --> */}
                      <div className="md-form">
                        <input type="email" id="materialLoginFormEmail" className="form-control" />
                        <label htmlFor="materialLoginFormEmail">E-mail</label>
                      </div>

                      {/* <!-- Password --> */}
                      <div className="md-form">
                        <input type="password" id="materialLoginFormPassword" className="form-control" />
                        <label htmlFor="materialLoginFormPassword">Password</label>
                      </div>

                      <div className="d-flex justify-content-around">
                        <div>
                          {/* <!-- Remember me --> */}
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="materialLoginFormRemember" />
                            <label className="form-check-label" htmlFor="materialLoginFormRemember">Remember me</label>
                          </div>
                        </div>
                        <div>
                          {/* <!-- Forgot password --> */}
                          <a href="/#">Forgot password?</a>
                        </div>
                      </div>

                      {/* <!-- Sign in button --> */}
                      <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

                      {/* <!-- Register --> */}
                      <p>Not a member?
                       <a href="/#">Register</a>
                      </p>

                      {/* <!-- Social login --> */}
                      <p>or sign in with:</p>
                     <a type="button" className="btn-floating btn-fb btn-sm" href = "/#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a type="button" className="btn-floating btn-tw btn-sm" href = "/#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a type="button" className="btn-floating btn-li btn-sm" href = "/#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a type="button" className="btn-floating btn-git btn-sm" href = "/#">
                        <i className="fa fa-github"></i>
                      </a>
                    </form>
                    {/* <!-- Form --> */}

                  </div>

                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
