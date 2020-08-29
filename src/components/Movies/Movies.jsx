import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import MoviesList from './MoviesList';
import ErrorBoundary from '../ErrorBoundary';
import config from '../../../config/config.json';

const Movies = ({ movies, onMovieEditClick, onMovieDeleteClick }) => (
    <ErrorBoundary>
        <Toolbar filters={config.filters} sorters={config.sorters} />
        <MoviesList items={movies.slice(0, 9)} onMovieEditClick={onMovieEditClick} onMovieDeleteClick={onMovieDeleteClick} />
    </ErrorBoundary>
);

Movies.propTypes = {
    className: PropTypes.string,
    movies: PropTypes.array,
    onMovieEditClick: PropTypes.func,
    onMovieDeleteClick: PropTypes.func
};
Movies.defaultProps = {
    className: '',
    movies: []
};
export default Movies;
