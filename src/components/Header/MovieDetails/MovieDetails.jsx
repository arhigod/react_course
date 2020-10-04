import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../../Poster';

import './MovieDetails.css';

const MovieDetails = ({ className, movie: { poster_path, title, vote_average, release_date = '', tagline, runtime, overview } }) => (
    <div className={`movieDetails ${className}`}>
        <Poster className='movieDetails_poster' src={poster_path} />
        <div className='movieDetails_detailBlock'>
            <div>
                <h3 className='movieDetails_title'>{title}</h3>
                <span className='movieDetails_vote_average'>{vote_average || 0}</span>
            </div>
            <span className='movieDetails_tagline'>{tagline}</span>
            <div className='movieDetails_numbersBlock'>
                <span className='movieDetails_release_date'>{release_date.slice(0, 4)}</span>
                <span className='movieDetails_runtime'>{runtime || 0} min</span>
            </div>
            <p className='movieDetails_overview'>{overview}</p>
        </div>
    </div>
);

MovieDetails.propTypes = {
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
    className: PropTypes.string
};
MovieDetails.defaultProps = {
    movie: {},
    className: ''
};
export default MovieDetails;
