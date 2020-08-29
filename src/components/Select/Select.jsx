import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Select.css';

const Select = ({ placeholder, multiselect, items, value, onChange }) => {
    const [selectedItem, setSelectedItem] = useState(!multiselect && items[0] ? items[0] : '');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        return function () {
            document.removeEventListener('click', onDocumentPressed);
        };
    }, [onDocumentPressed]);

    const onDocumentPressed = useCallback((e) => {
        if (!(multiselect && e.target.closest('.select li'))) {
            setIsOpen(false);
            document.removeEventListener('click', onDocumentPressed);
        }
    }, [multiselect]);

    const onSelectPressed = useCallback(() => {
        if (!isOpen) {
            document.addEventListener('click', onDocumentPressed);
            setIsOpen(true);
        }
    }, [isOpen, onDocumentPressed]);

    const onItemClick = useCallback(({ currentTarget }) => {
        let item = currentTarget.getAttribute('data-item');

        if (multiselect) {
            let newValue = [...value];
            if (newValue.includes(item)) {
                newValue.splice(newValue.indexOf(item), 1);
            } else {
                newValue.push(item);
            }
            newValue.sort();

            onChange(newValue);
        } else {
            setSelectedItem(item);
            onChange([item]);
        }
    }, [multiselect, onChange, value]);

    return (
        <div className={'select' + (isOpen ? ' open' : '')} onClick={onSelectPressed}>
            <span className={selectedItem || value.length ? '' : 'placeholder'}>
                {selectedItem || value.join(', ') || placeholder}
            </span>
            <ul>
                {
                    items.map((item) => (
                        <li className={selectedItem === item || value.includes(item) ? 'selected' : ''} onClick={onItemClick}
                            key={item} data-item={item}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

Select.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.arrayOf(PropTypes.string),
    multiselect: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};
Select.defaultProps = {
    items: [],
    value: [],
    multiselect: false,
    placeholder: 'Select an item',
    onChange: () => { }
};
export default Select;
