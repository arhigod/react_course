import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import config from '../../../config/config.json';

import './ModalMovieDetail.css';

const ModalMovieDetail = ({ movie, onCloseClick, onSubmitClick }) => {
    const formik = useFormik({
        initialValues: movie,
        validateOnChange: false,
        onSubmit: onSubmitClick,
        validate: values => {
            let errors = {};

            ['title', 'tagline', 'release_date', 'poster_path', 'overview', 'runtime'].forEach(type => {
                if (!values[type] && values[type] !== 0) {
                    errors[type] = 'Required field';
                }
            });
            if (values.runtime && values.runtime < 0 ) {
                errors.runtime = 'Must be larger than or equal to 0';
            }
            if (!values.genres.length) {
                errors.genres = 'Required field';
            }
            if (values.poster_path && !/^(ftp|http|https):\/\/[^ "]+$/.test(values.poster_path)) {
                errors.poster_path = 'Required valid URL';
            }

            return errors;
        }
    });

    const onInputChanged = useCallback(e => {
        formik.setErrors({
            ...formik.errors,
            [e.currentTarget.name]: undefined
        });
        formik.handleChange(e);
    }, [formik]);

    const onGenreChanged = useCallback(selectedItems => {
        formik.setErrors({
            ...formik.errors,
            genres: undefined
        });
        formik.setValues({
            ...formik.values,
            genres: selectedItems
        });
    }, [formik]);

    return (
        <Modal title={movie.id ? 'Edit movie' : 'Add movie'} acceptText={movie.id ? 'Save' : 'Submit'}
            onCloseClick={onCloseClick} onAcceptClick={formik.handleSubmit} onRejectClick={formik.handleReset}>
            <div className={`field notEditable ${movie.id ? '' : 'notDisplayed'}`}>
                <label>Movie id</label>
                <span>{formik.values.id}</span>
            </div>
            <div className='field'>
                <label>Title</label>
                <Input placeholder='Title here' value={formik.values.title} name='title' onChange={onInputChanged} error={formik.errors.title} />
            </div>
            <div className='field'>
                <label>Tagline</label>
                <Input placeholder='Tagline here' value={formik.values.tagline} name='tagline' onChange={onInputChanged} error={formik.errors.tagline} />
            </div>
            <div className='field'>
                <label>Release date</label>
                <Input type='date' placeholder='Select Date' value={formik.values.release_date} name='release_date' onChange={onInputChanged} error={formik.errors.release_date} />
            </div>
            <div className='field'>
                <label>Movie URL</label>
                <Input placeholder='Movie URL here' value={formik.values.poster_path} name='poster_path' onChange={onInputChanged} error={formik.errors.poster_path} />
            </div>
            <div className='field'>
                <label>Genre</label>
                <Select multiselect placeholder='Select Genre' items={config.genres} value={formik.values.genres} onChange={onGenreChanged} error={formik.errors.genres} />
            </div>
            <div className='field'>
                <label>Overview</label>
                <Input placeholder='Overview here' value={formik.values.overview} name='overview' onChange={onInputChanged} error={formik.errors.overview} />
            </div>
            <div className='field'>
                <label>Runtime</label>
                <Input placeholder='Runtime' type='number' value={formik.values.runtime} name='runtime' onChange={onInputChanged} error={formik.errors.runtime}/>
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
    movie: {
        title: '',
        tagline: '',
        release_date: '',
        poster_path: '',
        overview: '',
        genres: [],
        runtime: undefined
    },
    onCloseClick: () => { },
    onSubmitClick: () => { }
};
export default ModalMovieDetail;
