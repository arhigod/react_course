import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class MovieItem extends React.Component {
    render() {
        return (
            <div className='movieItem' style={this.props.style}>
                <img className='movieItem_poster' src={this.props.movie.poster_path} />
                <div className='movieItem_poster_description_mainBlock'>
                    <span className='movieItem_poster_description_title'>{this.props.movie.title}</span>
                    <span className='movieItem_poster_description_date'>{this.props.movie.release_date.slice(0, 4)}</span>
                </div>
                <span className='movieItem_poster_description_tagline'>{this.props.movie.tagline}</span>
            </div>
        );
    }
}

MovieItem.propTypes = {
    style: PropTypes.object,
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
    style: {}
};
export default MovieItem;
