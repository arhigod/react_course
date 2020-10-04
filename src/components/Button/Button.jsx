import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ className, onClick, icon, text, type, data }) => (
    <button className={`button ${type} ${text ? '' : 'onlyIcon'} ${className}`} onClick={onClick} data-data={data}>
        {icon}
        {text && <span>{text}</span>}
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.element,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.oneOf(['default', 'transparent', 'reject']),
    data: PropTypes.any
};
Button.defaultProps = {
    className: '',
    onClick: () => { },
    icon: null,
    text: '',
    type: 'default'
};
export default Button;
