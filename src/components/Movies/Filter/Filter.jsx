import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../../store/actions';
import PropTypes from 'prop-types';

import './Filter.css';

const Filter = ({ setFilter, items, filter }) => {
    const onClick = useCallback((e) => {
        let name = e.currentTarget.getAttribute('data-name');

        setFilter(name);
    }, [setFilter]);

    return (
        <ul className='movies_toolbar_filter'>
            {
                items.map((name) => {
                    return (
                        <li key={name} data-name={name} className={filter === name ? 'selected' : ''}
                            onClick={onClick}>
                            <a>{name}</a>
                        </li>
                    );
                })
            }
        </ul>
    );
};

const mapStateToProps = (state) => ({
    filter: state.filter
});
const mapDispatchToProps = dispatch => ({
    setFilter: (name) => dispatch(setFilter(name))
});

Filter.propTypes = {
    setFilter: PropTypes.func,
    filter: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string)
};
Filter.defaultProps = {
    items: []
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
