import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './Filter.css';

const Filter = ({ filters }) => {
    const [selectedFilter, setSelectedFilter] = useState(filters[0] || '');

    const onClick = useCallback((e) => {
        let filter = e.currentTarget.getAttribute('data-filter');

        setSelectedFilter(filter);
    }, []);

    return (
        <ul className='movies_toolbar_filter'>
            {
                filters.map((filter) => {
                    return (
                        <li key={filter} data-filter={filter} className={selectedFilter === filter ? 'selected' : ''}
                            onClick={onClick}>
                            <a>{filter}</a>
                        </li>
                    );
                })
            }
        </ul>
    );
};

Filter.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string)
};
Filter.defaultProps = {
    filters: []
};
export default Filter;
