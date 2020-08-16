import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Input extends React.Component {
    render() {
        return (
            <input className={'input ' + this.props.className} placeholder={this.props.placeholder} />
        );
    }
}

Input.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string
};
export default Input;
