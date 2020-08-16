import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    }

    onClick(i) {
        this.setState({
            selectedIndex: i
        });
    }

    render() {
        return (
            <ul className='movies_toolbar_filter'>
                {
                    this.props.categories.map(({ id, text }, i) => {
                        return (
                            <li key={id} className={this.state.selectedIndex === i ? 'selected' : ''} onClick={() => this.onClick(i)}>
                                <a>{text}</a>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

Filter.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string
    }))
};
Filter.defaultProps = {
    categories: []
};
export default Filter;
