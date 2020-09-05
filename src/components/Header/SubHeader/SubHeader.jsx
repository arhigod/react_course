import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo';
import Button from '../../Button';
import { Plus } from '@styled-icons/fa-solid/Plus';
import { Search } from '@styled-icons/ionicons-sharp/Search';

import './SubHeader.css';

const plusIcon = <Plus size='14' />;
const searchIcon = <Search size='30' />;

const SubHeader = ({ showSearchIcon, onAddMovieClick, onSearchIconClick }) => (
    <div className='subHeader'>
        <Logo />
        {
            showSearchIcon ?
                <Button className='subHeader_button_search' onClick={onSearchIconClick} icon={searchIcon} type='transparent' /> :
                <Button className='subHeader_button_addMovie' onClick={onAddMovieClick} text='Add movie' icon={plusIcon} />
        }
    </div>
);

SubHeader.propTypes = {
    showSearchIcon: PropTypes.bool,
    onAddMovieClick: PropTypes.func,
    onSearchIconClick: PropTypes.func
};
SubHeader.defaultProps = {
    showSearchIcon: false,
    onAddMovieClick: () => { },
    onSearchIconClick: () => { }
};
export default SubHeader;
