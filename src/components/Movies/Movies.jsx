import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import MoviesList from './MoviesList';
import ErrorBoundary from '../ErrorBoundary';
import config from '../../../config/config.json';

const Movies = ({ movies }) => (
    <ErrorBoundary>
        <Toolbar filters={config.filters} sorters={config.sorters} />
        <MoviesList items={movies.slice(0, 9)} />
    </ErrorBoundary>
);

Movies.propTypes = {
    className: PropTypes.string,
    movies: PropTypes.array
};
Movies.defaultProps = {
    className: '',
    movies: []
};
export default Movies;
