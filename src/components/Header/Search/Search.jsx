import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import Button from '../../Button';

import './Search.css';

const Search = ({ className }) => (
    <div className={className}>
        <p className='header_search_text'>Find your movie</p>
        <div className='header_search_inputBlock'>
            <Input className='header_search_input' placeholder='What do your want to watch?' type='search' />
            <Button className='header_search_button' text='Search' />
        </div>
    </div>
);

Search.propTypes = {
    className: PropTypes.string
};
Search.defaultProps = {
    className: ''
};
export default Search;
