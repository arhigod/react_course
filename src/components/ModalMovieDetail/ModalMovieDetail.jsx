import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import config from '../../../config/config.json';

import './ModalMovieDetail.css';

const ModalMovieDetail = ({ movie, onCloseClick, onSubmitClick }) => {
    const [data, setData] = useState(movie);

    const onInputChanged = useCallback(({ currentTarget: { value, name } }) => {
        setData({ ...data, [name]: value });
    }, [data]);

    const onSelectChanged = useCallback((selectedItems) => {
        setData({ ...data, genres: selectedItems });
    }, [data]);

    const onAcceptClick = useCallback(() => {
        onSubmitClick(data);
    }, [data, onSubmitClick]);

    const onRejectClick = useCallback(() => {
        setData(movie);
    }, [movie]);

    return (
        <Modal title={movie.id ? 'Edit movie' : 'Add movie'} acceptText={movie.id ? 'Save' : 'Submit'}
            onCloseClick={onCloseClick} onAcceptClick={onAcceptClick} onRejectClick={onRejectClick}>
            <div className={`field notEditable ${movie.id ? '' : 'notDisplayed'}`}>
                <label>Movie id</label>
                <span>{data.id}</span>
            </div>
            <div className='field'>
                <label>Title</label>
                <Input placeholder='Title here' value={data.title} name='title' onChange={onInputChanged} />
            </div>
            <div className='field'>
                <label>Release date</label>
                <Input type='date' placeholder='Select Date' value={data.release_date} name='release_date' onChange={onInputChanged} />
            </div>
            <div className='field'>
                <label>Movie URL</label>
                <Input placeholder='Movie URL here' value={data.poster_path} name='poster_path' onChange={onInputChanged} />
            </div>
            <div className='field'>
                <label>Genre</label>
                <Select multiselect placeholder='Select Genre' items={config.genres} value={data.genres} onChange={onSelectChanged} />
            </div>
            <div className='field'>
                <label>Overview</label>
                <Input placeholder='Overview here' value={data.overview} name='overview' onChange={onInputChanged} />
            </div>
            <div className='field'>
                <label>Runtime</label>
                <Input placeholder='Runtime' type='number' value={data.runtime} name='runtime' onChange={onInputChanged} />
            </div>
        </Modal>
    );
};

ModalMovieDetail.propTypes = {
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
    onCloseClick: PropTypes.func,
    onSubmitClick: PropTypes.func
};
ModalMovieDetail.defaultProps = {
    movie: {},
    onCloseClick: () => { },
    onSubmitClick: () => { }
};
export default ModalMovieDetail;
