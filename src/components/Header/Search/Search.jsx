import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useComponentDidUpdate } from '../../../hooks/lifecycle';
import PropTypes from 'prop-types';
import Input from '../../Input';
import Button from '../../Button';

import './Search.css';

const Search = ({ className, search }) => {
    const [value, setValue] = useState(search);
    const history = useHistory();

    useComponentDidUpdate(() => {
        setValue(search);
    }, [search]);

    const onChange = useCallback(({ currentTarget: { value } }) => {
        setValue(value);
    }, []);

    const onKeyUp = useCallback(({ key }) => {
        if (key === 'Enter') {
            history.push(value ? '/search/' + value : '/');
        }
    }, [history, value]);

    const onClick = useCallback(() => {
        history.push(value ? '/search/' + value : '/');
    }, [history, value]);

    return (
        <div className={className}>
            <p className='header_search_text'>Find your movie</p>
            <div className='header_search_inputBlock'>
                <Input className='header_search_input' placeholder='What do your want to watch?'
                    value={value} onChange={onChange} onKeyUp={onKeyUp} />
                <Button className='header_search_button' text='Search' onClick={onClick} />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    search: state.search
});

Search.propTypes = {
    setSearch: PropTypes.func,
    className: PropTypes.string,
    search: PropTypes.string
};
Search.defaultProps = {
    className: ''
};
export default connect(mapStateToProps)(Search);
