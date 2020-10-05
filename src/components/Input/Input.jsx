import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ className, placeholder, type, value, onChange, onKeyUp, name, error }) => (
    <>
        <input className={`input ${error ? 'inputError ' : ''}` + className} placeholder={placeholder} type={type} value={value}
            onChange={onChange} onKeyUp={onKeyUp} name={name} />
        <div className='inputErrorMessage'>{error}</div>
    </>
);

Input.propTypes = {
    className: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func
};
Input.defaultProps = {
    className: '',
    error: '',
    placeholder: '',
    type: 'text',
    value: '',
    name: '',
    onChange: () => { },
    onKeyUp: () => { }
};
export default Input;
