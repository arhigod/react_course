import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo';
import Button from '../../Button';
import { Plus } from '@styled-icons/fa-solid/Plus';

import './SubHeader.css';

const SubHeader = ({ onAddMoviePressed }) => {
    const plusIcon = <Plus size='14' />;

    return (
        <div className='subHeader'>
            <Logo />
            <Button className='subHeader_button' onClick={onAddMoviePressed} text='Add movie' icon={plusIcon} />
        </div>
    );
};

SubHeader.propTypes = {
    onAddMoviePressed: PropTypes.func
};
SubHeader.defaultProps = {
    onAddMoviePressed: () => { }
};
export default SubHeader;
