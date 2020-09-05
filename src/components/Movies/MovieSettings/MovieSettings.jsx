import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { Close } from '@styled-icons/ionicons-outline/Close';

import './MovieSettings.css';

const closeIcon = <Close size='20' />;

const MovieSettings = ({ className, onCloseClick, onEditClick, onDeleteClick }) => {
    return (
        <div className={`movieSettings ${className}`}>
            <Button className='movieSettings_close' icon={closeIcon} onClick={onCloseClick} type='transparent' />
            <ul>
                <li onClick={onEditClick}>Edit</li>
                <li onClick={onDeleteClick}>Delete</li>
            </ul>
        </div>
    );
};

MovieSettings.propTypes = {
    className: PropTypes.string,
    onCloseClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func
};
MovieSettings.defaultProps = {
    className: ''
};
export default MovieSettings;
