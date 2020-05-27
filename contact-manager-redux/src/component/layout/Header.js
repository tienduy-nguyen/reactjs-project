import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            Contact Manager
          </Link>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  <i className='fas fa-home mr-1'></i>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact/add'>
                  Add Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  branding: 'Contact Manger',
};

Header.prototype = {
  branding: PropTypes.string.isRequired,
};

export default Header;
