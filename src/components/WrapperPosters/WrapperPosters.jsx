import React from 'react';
import PropTypes from 'prop-types';

import './WrapperPosters.css';

const Posters = ({ children }) => (
    <div className='posters'>
        {children}
    </div>
);

Posters.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Posters;
