import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={classnames('form-control form-controm-lg', {
          'is-invalid': error,
        })}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
      ></input>
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};

TextInputGroup.protoTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInputGroup.defaultProps = {
  type: 'text',
};

export default TextInputGroup;
