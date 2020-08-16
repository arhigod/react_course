import React from 'react';
import PropTypes from 'prop-types';

class ColoredBackground extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.color }}>
                {this.props.children}
            </div>
        );
    }
}

ColoredBackground.propTypes = {
    color: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ColoredBackground;
