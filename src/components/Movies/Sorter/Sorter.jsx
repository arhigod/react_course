import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { setSorter } from '../../../store/actions';
import PropTypes from 'prop-types';
import Select from '../../Select';

import './Sorter.css';

const Sorter = ({ setSorter, items, sorter }) => {
    const onChange = useCallback(([name]) => {
        let sorter = items.find(x => x.name === name);
        setSorter(sorter);
    }, [items, setSorter]);

    return (
        <label className='movies_toolbar_sorter'>
            Sort by
            <Select items={items.map(x => x.name)} onChange={onChange} value={[sorter.name]} />
        </label>
    );
};

const mapStateToProps = (state) => ({
    sorter: state.sorter
});
const mapDispatchToProps = dispatch => ({
    setSorter: (sorter) => dispatch(setSorter(sorter))
});

Sorter.propTypes = {
    setSorter: PropTypes.func,
    sorter: PropTypes.object,
    items: PropTypes.arrayOf(PropTypes.object)
};
Sorter.defaultProps = {
    items: []
};
export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
