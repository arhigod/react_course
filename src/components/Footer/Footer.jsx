import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

const Footer = ({ children }) => (
    <div className='footer'>
        {children}
    </div>
);

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Footer;
