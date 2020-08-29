import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../Select';

import './Sorter.css';

const Sorter = ({ sorters }) => (
    <label className='movies_toolbar_sorter'>
        Sort by
        <Select items={sorters} />
    </label>
);

Sorter.propTypes = {
    sorters: PropTypes.arrayOf(PropTypes.string)
};
Sorter.defaultProps = {
    sorters: []
};
export default Sorter;
