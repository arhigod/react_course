import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';

import './style.css';

class ButtonAddMovie extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                <p className='header_search_text'>Find your movie</p>
                <div className='header_search_inputBlock'>
                    <Input className='header_search_input' placeholder='What do your want to watch?' />
                    <button className='header_search_button'>Search</button>
                </div>
            </div>
        );
    }
}

ButtonAddMovie.propTypes = {
    style: PropTypes.object
};
ButtonAddMovie.defaultProps = {
    style: {}
};
export default ButtonAddMovie;
