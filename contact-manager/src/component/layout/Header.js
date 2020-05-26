import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
        <div className='container'>
          <a href='/' className='navbar-brand'>
            Contact Manager
          </a>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='/'>
                  <i className='fas fa-home mr-1'></i>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/#'>
                  Link
                </a>
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
