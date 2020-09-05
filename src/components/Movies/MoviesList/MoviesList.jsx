import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';

import './MoviesList.css';

const MoviesList = ({ items, onMovieEditClick, onMovieDeleteClick }) => (
    <div className='moviesList'>
        <p className='moviesList_counter'>
            <span>{items.length}</span> movies found
        </p>
        {
            items.map(movie => <MovieItem key={movie.id} movie={movie} className='moviesList_movieItem'
                onMovieEditClick={onMovieEditClick} onMovieDeleteClick={onMovieDeleteClick} />)
        }
        <div className='dummyFlexItem' />
    </div>
);

MoviesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
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
    })),
    onMovieEditClick: PropTypes.func,
    onMovieDeleteClick: PropTypes.func
};
MoviesList.defaultProps = {
    items: []
};
export default MoviesList;
