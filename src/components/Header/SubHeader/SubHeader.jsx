import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo';
import Button from '../../Button';
import { Plus } from '@styled-icons/fa-solid/Plus';

import './SubHeader.css';

const plusIcon = <Plus size='14' />;

const SubHeader = ({ onAddMovieClick }) => (
    <div className='subHeader'>
        <Logo />
        <Button className='subHeader_button' onClick={onAddMovieClick} text='Add movie' icon={plusIcon} />
    </div>
);

SubHeader.propTypes = {
    onAddMovieClick: PropTypes.func
};
SubHeader.defaultProps = {
    onAddMovieClick: () => { }
};
export default SubHeader;
