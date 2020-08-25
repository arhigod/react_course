import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedId: props.items[0] ? props.items[0].id : '',
            selectedText: props.items[0] ? props.items[0].text : 'No items'
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.items !== prevProps.items) {
            this.setState({
                selectedId: this.props.items[0] ? this.props.items[0].id : '',
                selectedText: this.props.items[0] ? this.props.items[0].text : 'No items'
            });
        }
    }

    onSelectPressed() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onItemPressed({ id, text }) {
        this.setState({
            selectedId: id,
            selectedText: text
        });
    }

    render() {
        return (
            <div className={'select' + (this.state.isOpen ? ' open' : '')} onClick={() => this.onSelectPressed()}>
                <span>{this.state.selectedText}</span>
                <ul>
                    {
                        this.props.items.map(({ id, text }) => (
                            <li className={this.state.selectedId === id ? 'selected' : ''} onClick={() => this.onItemPressed({ id, text })}
                                key={id} data-value={id}>
                                {text}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

Select.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string
    }))
};
Select.defaultProps = {
    items: []
};
export default Select;
