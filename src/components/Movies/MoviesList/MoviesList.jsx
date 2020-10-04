import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem';

import './MoviesList.css';

const MoviesList = ({ movies, totalAmount, isLoading }) => (
    <div className={`moviesList ${isLoading ? 'loading' : ''}`}>
        <p className='moviesList_counter'>
            <span>{totalAmount}</span> movies found
        </p>
        {
            movies.map(movie => <MovieItem key={movie.id} movie={movie} className='moviesList_movieItem' />)
        }
        <div className='dummyFlexItem' />
    </div>
);

const mapStateToProps = (state) => ({
    movies: state.movies,
    totalAmount: state.totalAmount,
    isLoading: state.isLoading
});

MoviesList.propTypes = {
    totalAmount: PropTypes.number,
    movies: PropTypes.array,
    isLoading: PropTypes.bool
};
MoviesList.defaultProps = {
    items: []
};
export default connect(mapStateToProps)(MoviesList);
