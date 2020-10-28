import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMovie, setCurrentMovie } from '../../../store/actions';
import Logo from '../../Logo';
import Button from '../../Button';
import ModalMovieDetail from '../../ModalMovieDetail';
import { Plus } from '@styled-icons/fa-solid/Plus';
import { Search } from '@styled-icons/ionicons-sharp/Search';

import './SubHeader.css';

const plusIcon = <Plus size='14' />;
const searchIcon = <Search size='30' />;

const SubHeader = ({ addMovie, setCurrentMovie, showSearchIcon, search }) => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const history = useHistory();

    const onAddMovieClick = useCallback(() => {
        setIsModalOpened(true);
    }, []);

    const onSubmitModalClick = useCallback((movie) => {
        addMovie(movie)
            .then(() => {
                setIsModalOpened(false);
            })
            .catch(alert);
    }, [addMovie]);

    const onCloseModalClick = useCallback(() => {
        setIsModalOpened(false);
    }, []);

    const onSearchIconClick = useCallback(() => {
        setCurrentMovie(null);
        history.push(search ? '/search/' + search : '/');
    }, [history, search, setCurrentMovie]);

    return (
        <div className='subHeader'>
            <Logo />
            {
                showSearchIcon ?
                    <Button className='subHeader_button_search' onClick={onSearchIconClick} icon={searchIcon} type='transparent' /> :
                    <Button className='subHeader_button_addMovie' onClick={onAddMovieClick} text='Add movie' icon={plusIcon} />
            }
            {isModalOpened && <ModalMovieDetail onCloseClick={onCloseModalClick} onSubmitClick={onSubmitModalClick} />}
        </div>
    );
};

const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = dispatch => ({
    addMovie: (movie) => dispatch(addMovie(movie)),
    setCurrentMovie: (movie) => dispatch(setCurrentMovie(movie))
});

SubHeader.propTypes = {
    showSearchIcon: PropTypes.bool,
    addMovie: PropTypes.func,
    setCurrentMovie: PropTypes.func,
    search: PropTypes.string
};
SubHeader.defaultProps = {
    showSearchIcon: false
};
export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
