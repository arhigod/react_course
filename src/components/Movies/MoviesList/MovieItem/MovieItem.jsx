import React from 'react';
import PropTypes from 'prop-types';

import './MovieItem.css';

const MovieItem = ({ className, movie: { poster_path, title, release_date, tagline } }) => (
    <div className={`movieItem ${className}`} >
        <img className='movieItem_poster' src={poster_path} />
        <div className='movieItem_poster_description_mainBlock'>
            <span className='movieItem_poster_description_title'>{title}</span>
            <span className='movieItem_poster_description_date'>{release_date.slice(0, 4)}</span>
        </div>
        <span className='movieItem_poster_description_tagline'>{tagline}</span>
    </div>
);

MovieItem.propTypes = {
    className: PropTypes.string,
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
    })
};
MovieItem.defaultProps = {
    className: ''
};
export default MovieItem;
