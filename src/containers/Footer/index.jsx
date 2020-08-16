import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                {this.props.children}
            </div>
        );
    }
}

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Footer;
