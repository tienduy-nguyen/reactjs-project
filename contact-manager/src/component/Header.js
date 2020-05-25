import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: 'ContactManger',
};

Header.prototype = {
  branding: PropTypes.string.isRequired,
};

export default Header;
