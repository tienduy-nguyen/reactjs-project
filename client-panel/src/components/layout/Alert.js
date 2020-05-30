import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
  const { message, messageType } = props;
  return (
    <div
      className={`alert text-center ${
        messageType === 'sucesss' ? 'alert-sucess' : 'alert-danger'
      }`}
    >
      {message}
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  messageType: PropTypes.string.isRequired,
};

export default Alert;
