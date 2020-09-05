import React from 'react';
import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import MovieDetails from './MovieDetails';
import Search from './Search';
import ErrorBoundary from '../ErrorBoundary';

import './Header.css';

const Header = ({ movie, showMovieDetails, onAddMovieClick, onSearchIconClick }) => {
    return (
        <ErrorBoundary>
            <div className={`header ${showMovieDetails ? 'darkBg' : ''}`}>
                <SubHeader onAddMovieClick={onAddMovieClick} onSearchIconClick={onSearchIconClick} showSearchIcon={showMovieDetails} />
                {
                    showMovieDetails ?
                        <MovieDetails className='header_movieDetails' movie={movie} /> :
                        <Search className='header_search' />
                }
            </div>
        </ErrorBoundary>
    );
};

Header.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        tagline: PropTypes.string,
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
        release_date: PropTypes.string,
        poster_path: PropTypes.string,
        overview: PropTypes.string,
        budget: PropTypes.number,
        revenue: PropTypes.number,
        genres: PropTypes.arrayOf(PropTypes.string),
        runtime: PropTypes.number
    }),
    showMovieDetails: PropTypes.bool,
    onAddMovieClick: PropTypes.func,
    onSearchIconClick: PropTypes.func
};
Header.defaultProps = {
    movie: {},
    showMovieDetails: false,
    onAddMovieClick: () => { },
    onSearchIconClick: () => { }
};
export default Header;
