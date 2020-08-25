import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../../Select';

import './style.css';

class Sorter extends React.Component {
    render() {
        return (
            <label className='movies_toolbar_sorter'>
                Sort by
                <Select items={this.props.sortItems} />
            </label>
        );
    }
}

Sorter.propTypes = {
    sortItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string
    }))
};
Sorter.defaultProps = {
    sortItems: []
};
export default Sorter;
