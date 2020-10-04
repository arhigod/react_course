import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Close } from '@styled-icons/ionicons-outline/Close';

import './Modal.css';

const closeIcon = <Close size='40' />;

const Modal = ({ title, children, rejectText, acceptText, showReject, onCloseClick, onAcceptClick, onRejectClick }) => {

    return (
        <div className='modal_background'>
            <div className='modal_container'>
                <div className='modal_header'>
                    <Button className='modal_button_close' icon={closeIcon} type='transparent' onClick={onCloseClick} />
                    <p className='modal_title'>{title}</p>
                </div>
                <div className='modal_content'>
                    {children}
                </div>
                <div className='modal_footer'>
                    {showReject && <Button text={rejectText} type='reject' onClick={onRejectClick} />}
                    <Button text={acceptText} onClick={onAcceptClick} />
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    rejectText: PropTypes.string,
    acceptText: PropTypes.string,
    showReject: PropTypes.bool,
    onCloseClick: PropTypes.func,
    onAcceptClick: PropTypes.func,
    onRejectClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
Modal.defaultProps = {
    className: '',
    title: '',
    rejectText: 'Reset',
    acceptText: 'Submit',
    onCloseClick: () => { },
    onAcceptClick: () => { },
    onRejectClick: () => { },
    showReject: true
};
export default Modal;
