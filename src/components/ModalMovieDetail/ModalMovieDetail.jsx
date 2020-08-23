import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Select from '../Select';
import Modal from '../Modal';
import config from '../../../config/config.json';

import './ModalMovieDetail.css';

const ModalMovieDetail = ({ onCloseClick }) => (
    <Modal title='Add movie' onCloseClick={onCloseClick}>
        <div className='field'>
            <label>Title</label>
            <Input placeholder='Title here' />
        </div>
        <div className='field'>
            <label>Release date</label>
            <Input type='date' placeholder='Select Date' />
        </div>
        <div className='field'>
            <label>Movie URL</label>
            <Input placeholder='Movie URL here' />
        </div>
        <div className='field'>
            <label>Genre</label>
            <Select multiselect placeholder='Select Genre' items={config.genres} />
        </div>
        <div className='field'>
            <label>Overview</label>
            <Input placeholder='Overview here' />
        </div>
        <div className='field'>
            <label>Runtime</label>
            <Input placeholder='Runtime' type='number' />
        </div>
    </Modal>
);

ModalMovieDetail.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onCloseClick: PropTypes.func
};
ModalMovieDetail.defaultProps = {
    className: '',
    placeholder: '',
    onCloseClick: () => { }
};
export default ModalMovieDetail;
