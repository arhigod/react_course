import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

import './style.css';

class MoviesList extends React.Component {
    render() {
        return (
            <div className='moviesList'>
                <p className='moviesList_counter'>
                    <span>{this.props.items.length}</span> movies found
                </p>
                {
                    this.props.items.map(movie => <MovieItem key={movie.id} movie={movie} style={{marginBottom: '20px'}} />)
                }
            </div>
        );
    }
}

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
    }))
};
MoviesList.defaultProps = {
    items: []
};
export default MoviesList;
