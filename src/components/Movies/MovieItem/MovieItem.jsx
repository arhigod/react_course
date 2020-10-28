import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editMovie, deleteMovie, scrollTop } from '../../../store/actions';
import ModalMovieDetail from '../../ModalMovieDetail';
import ModalMovieDelete from '../../ModalMovieDelete';
import Button from '../../Button';
import Poster from '../../Poster';
import MovieSettings from '../MovieSettings';
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded';

import './MovieItem.css';

const dotsIcon = <DotsVerticalRounded size='45' />;

const MovieItem = ({ editMovie, deleteMovie, scrollTop, className, movie, movie: { poster_path, title, release_date = '', tagline, genres } }) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [openedModal, setOpenedModal] = useState('');
    const history = useHistory();

    const onEditClick = useCallback(() => {
        setIsSettingsOpen(false);
        setOpenedModal('edit');
    }, []);

    const onDeleteClick = useCallback(() => {
        setIsSettingsOpen(false);
        setOpenedModal('delete');
    }, []);

    const onSaveModalEditMovieClick = useCallback((movie) => {
        editMovie(movie)
            .then(() => {
                setOpenedModal('');
            })
            .catch(alert);
    }, [editMovie]);

    const onConfirmMovieDeleteClick = useCallback(() => {
        deleteMovie(movie)
            .then(() => {
                setOpenedModal('');
            })
            .catch(alert);
    }, [deleteMovie, movie]);

    const onCloseModalClick = useCallback(() => {
        setOpenedModal('');
    }, []);

    const onSettingsButtonClick = useCallback(() => {
        setIsSettingsOpen(true);
    }, []);

    const onCloseSettingsClick = useCallback(() => {
        setIsSettingsOpen(false);
    }, []);

    const onMovClick = useCallback((e) => {
        if (!e.target.closest('.movieItem_movieSettings') && !e.target.closest('.movieItem_detailButton')) {
            scrollTop();
            history.push('/movie/' + movie.id);
        }
    }, [history, movie, scrollTop]);

    return (
        <>
            <div className={`movieItem ${className}`} onMouseLeave={onCloseSettingsClick} onClick={onMovClick} >
                {
                    isSettingsOpen ?
                        <MovieSettings className='movieItem_movieSettings' onCloseClick={onCloseSettingsClick} onEditClick={onEditClick}
                            onDeleteClick={onDeleteClick} movie={movie} /> :
                        <Button icon={dotsIcon} className='movieItem_detailButton' onClick={onSettingsButtonClick} />
                }
                <Poster className='movieItem_poster' src={poster_path} />
                <div className='movieItem_description_mainBlock'>
                    <span className='movieItem_description_title'>{title}</span>
                    <span className='movieItem_description_date'>{release_date.slice(0, 4)}</span>
                </div>
                <span className='movieItem_description_tagline'>{tagline || genres.slice(0, 3).join(', ')}</span>
            </div>
            {openedModal === 'edit' && <ModalMovieDetail onCloseClick={onCloseModalClick} onSubmitClick={onSaveModalEditMovieClick} movie={movie} />}
            {openedModal === 'delete' && <ModalMovieDelete onCloseClick={onCloseModalClick} onSubmitClick={onConfirmMovieDeleteClick} />}
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    scrollTop: () => dispatch(scrollTop()),
    editMovie: (movie) => dispatch(editMovie(movie)),
    deleteMovie: (movie) => dispatch(deleteMovie(movie))
});

MovieItem.propTypes = {
    className: PropTypes.string,
    scrollTop: PropTypes.func,
    editMovie: PropTypes.func,
    deleteMovie: PropTypes.func,
    movie: PropTypes.object
};
MovieItem.defaultProps = {
    className: ''
};
export default connect(null, mapDispatchToProps)(MovieItem);
