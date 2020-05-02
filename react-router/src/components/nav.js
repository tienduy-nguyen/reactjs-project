/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import {Link ,useRouteMatch} from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
    return (
      <li className={match ? 'nav-item active' : 'nav-item'}>
        <Link to={to} className='nav-link'>{label}</Link>
      </li>
    )
  }

//ES6
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <MenuLink to='/' activeOnlyWhenExact={true} label='Home'></MenuLink>
                  <MenuLink to='/about' activeOnlyWhenExact={false} label='About'></MenuLink>
                  <MenuLink to='/contact' activeOnlyWhenExact={false} label='Contact'></MenuLink>
                </ul>
              </div>

            </div>
          </nav>
        )
    }
}

export default Nav;

