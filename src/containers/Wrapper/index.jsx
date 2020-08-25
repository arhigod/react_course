import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Wrapper extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                {this.props.children}
            </div>
        );
    }
}

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Wrapper;
