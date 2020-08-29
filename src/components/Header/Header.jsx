import React from 'react';
import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import Search from './Search';
import ErrorBoundary from '../ErrorBoundary';

import './Header.css';

const Header = ({ onAddMovieClick }) => (
    <ErrorBoundary>
        <div className='header'>
            <SubHeader onAddMovieClick={onAddMovieClick} />
            <Search className='header_search' />
        </div>
    </ErrorBoundary>
);

Header.propTypes = {
    onAddMovieClick: PropTypes.func
};
Header.defaultProps = {
    onAddMovieClick: () => { }
};
export default Header;
