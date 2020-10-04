import React from 'react';
import Toolbar from './Toolbar';
import MoviesList from './MoviesList';
import Pagination from './Pagination';
import ErrorBoundary from '../ErrorBoundary';
import config from '../../../config/config.json';

const Movies = () => (
    <ErrorBoundary>
        <Toolbar filters={config.filters} sorters={config.sorters} />
        <MoviesList/>
        <Pagination />
    </ErrorBoundary>
);
export default Movies;
