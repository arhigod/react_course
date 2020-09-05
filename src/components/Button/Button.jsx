import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ className, onClick, icon, text, type }) => (
    <button className={`button ${type} ${text ? '' : 'onlyIcon'} ${className}`} onClick={onClick}>
        {icon}
        {text && <span>{text}</span>}
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.element,
    text: PropTypes.string,
    type: PropTypes.oneOf(['default', 'transparent', 'reject']),
};
Button.defaultProps = {
    className: '',
    onClick: () => { },
    icon: null,
    text: '',
    type: 'default'
};
export default Button;
