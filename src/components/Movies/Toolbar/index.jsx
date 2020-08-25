import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Sorter from './Sorter';

import './style.css';

class Toolbar extends React.Component {
    render() {
        return (
            <div className='movies_toolbar'>
                <Filter categories={this.props.categories} />
                <Sorter sortItems={this.props.sortItems} />                
            </div>
        );
    }
}

Toolbar.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string
    })),
    sortItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string
    }))
};
Toolbar.defaultProps = {
    categories: [],
    sortItems: []
};
export default Toolbar;
