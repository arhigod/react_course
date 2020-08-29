import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import MovieSettings from '../MovieSettings';
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded';

import './MovieItem.css';

const dotsIcon = <DotsVerticalRounded size='45' />;

const MovieItem = ({ className, movie, movie: { poster_path, title, release_date, tagline }, onMovieEditClick, onMovieDeleteClick }) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const onSettingsButtonClick = useCallback(() => {
        setIsSettingsOpen(true);
    }, []);

    const onCloseSettingsClick = useCallback(() => {
        setIsSettingsOpen(false);
    }, []);

    const onEditSettingsClick = useCallback(() => {
        setIsSettingsOpen(false);
        onMovieEditClick(movie);
    }, [movie, onMovieEditClick]);

    const onDeleteSettingsClick = useCallback(() => {
        setIsSettingsOpen(false);
        onMovieDeleteClick(movie);
    }, [movie, onMovieDeleteClick]);

    return (
        <div className={`movieItem ${className}`} onMouseLeave={onCloseSettingsClick}>
            {
                isSettingsOpen ?
                    <MovieSettings className='movieItem_movieSettings' onCloseClick={onCloseSettingsClick} onEditClick={onEditSettingsClick}
                        onDeleteClick={onDeleteSettingsClick} /> :
                    <Button icon={dotsIcon} className='movieItem_detailButton' onClick={onSettingsButtonClick} />
            }
            <img className='movieItem_poster' src={poster_path} />
            <div className='movieItem_poster_description_mainBlock'>
                <span className='movieItem_poster_description_title'>{title}</span>
                <span className='movieItem_poster_description_date'>{release_date.slice(0, 4)}</span>
            </div>
            <span className='movieItem_poster_description_tagline'>{tagline}</span>
        </div>
    );
};

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
    }),
    onMovieEditClick: PropTypes.func,
    onMovieDeleteClick: PropTypes.func
};
MovieItem.defaultProps = {
    className: ''
};
export default MovieItem;
