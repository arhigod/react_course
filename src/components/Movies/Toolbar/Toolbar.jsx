import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter';
import Sorter from '../Sorter';

import './Toolbar.css';

const Toolbar = ({ filters, sorters }) => (
    <div className='movies_toolbar'>
        <Filter items={filters} />
        <Sorter items={sorters} />
    </div>
);

Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    sorters: PropTypes.arrayOf(PropTypes.object)
};
Toolbar.defaultProps = {
    filters: [],
    sorters: []
};
export default Toolbar;
