import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import MovieDetails from './MovieDetails';
import Search from './Search';
import ErrorBoundary from '../ErrorBoundary';

import './Header.css';

const Header = ({ currentMovie }) => {
    return (
        <ErrorBoundary>
            <div className={`header ${currentMovie ? 'darkBg' : ''}`}>
                <SubHeader showSearchIcon={!!currentMovie} />
                {
                    currentMovie ?
                        <MovieDetails className='header_movieDetails' movie={currentMovie} /> :
                        <Search className='header_search' />
                }
            </div>
        </ErrorBoundary>
    );
};

const mapStateToProps = (state) => ({
    currentMovie: state.currentMovie
});

Header.propTypes = {
    currentMovie: PropTypes.object
};
Header.defaultProps = {
    showMovieDetails: false
};
export default connect(mapStateToProps)(Header);
