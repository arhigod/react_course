import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ className, placeholder, type }) => (
    <input className={'input ' + className} placeholder={placeholder} type={type} />
);

Input.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string
};
Input.defaultProps = {
    className: '',
    placeholder: '',
    type: 'text'
};
export default Input;
