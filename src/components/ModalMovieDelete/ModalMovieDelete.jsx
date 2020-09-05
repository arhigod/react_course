import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';

import './ModalMovieDelete.css';

const ModalMovieDelete = ({ onCloseClick, onSubmitClick }) => (
    <Modal title='Delete movie' acceptText='Confirm' showReject={false} onCloseClick={onCloseClick} onAcceptClick={onSubmitClick} >
        <p className='ModalMovieDelete_text'>Are you sure you want to delete this movie?</p>
    </Modal>
);

ModalMovieDelete.propTypes = {
    onCloseClick: PropTypes.func,
    onSubmitClick: PropTypes.func
};
ModalMovieDelete.defaultProps = {
    onCloseClick: () => { },
    onSubmitClick: () => { }
};
export default ModalMovieDelete;
