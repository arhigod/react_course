import React from 'react';
import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import Search from './Search';
import ErrorBoundary from '../ErrorBoundary';

import './Header.css';

const Header = ({ onAddMoviePressed }) => (
    <ErrorBoundary>
        <div className='header'>
            <SubHeader onAddMoviePressed={onAddMoviePressed} />
            <Search className='header_search' />
        </div>
    </ErrorBoundary>
);

Header.propTypes = {
    onAddMoviePressed: PropTypes.func
};
Header.defaultProps = {
    onAddMoviePressed: () => { }
};
export default Header;
