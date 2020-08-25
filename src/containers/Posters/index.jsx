import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Posters extends React.Component {
    render() {
        let styles = {};
        if (this.props.height) styles.height = this.props.height;
        if (this.props.width) styles.width = this.props.width;

        return (
            <div className='posters' style={styles}>
                {this.props.children}
            </div>
        );
    }
}

Posters.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Posters;
