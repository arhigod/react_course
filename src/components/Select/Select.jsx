import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Select.css';

const Select = ({ placeholder, multiselect, items }) => {
    const [selectedItem, setSelectedItem] = useState(!multiselect && items[0] ? items[0] : '');
    const [selectedItems, setSelectedItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        return function cleanup() {
            document.removeEventListener('click', onDocumentPressed);
        };
    }, [onDocumentPressed]);

    const onDocumentPressed = useCallback((e) => {
        if (!(multiselect && e.target.closest('.select li'))) {
            setIsOpen(false);
            document.removeEventListener('click', onDocumentPressed);
        }
    }, [multiselect]);

    const onSelectPressed = () => {
        if (!isOpen) {
            document.addEventListener('click', onDocumentPressed);
            setIsOpen(true);
        }
    };

    const onItemClick = useCallback((e) => {
        let item = e.currentTarget.getAttribute('data-item');

        if (multiselect) {
            if (selectedItems.includes(item)) {
                selectedItems.splice(selectedItems.indexOf(item), 1);
            } else {
                selectedItems.push(item);
            }
            setSelectedItems([...selectedItems.sort()]);
        } else {
            setSelectedItem(item);
        }
    }, [multiselect, selectedItems]);

    return (
        <div className={'select' + (isOpen ? ' open' : '')} onClick={onSelectPressed}>
            <span className={selectedItem || selectedItems.length ? '' : 'placeholder'}>
                {selectedItem || selectedItems.join(', ') || placeholder}
            </span>
            <ul>
                {
                    items.map((item) => (
                        <li className={selectedItem === item || selectedItems.includes(item) ? 'selected' : ''} onClick={onItemClick} 
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
    multiselect: PropTypes.bool,
    placeholder: PropTypes.string
};
Select.defaultProps = {
    items: [],
    multiselect: false,
    placeholder: 'Select an item'
};
export default Select;
