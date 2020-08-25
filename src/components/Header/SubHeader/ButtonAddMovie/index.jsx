import React from 'react';
import { Plus } from '@styled-icons/fa-solid/Plus';

import './style.css';

export default class ButtonAddMovie extends React.Component {
    render() {
        return (
            <button className='header_subHeader_button_addMovie'>
                <Plus size="14" />
                <span> Add movie</span>
            </button>
        );
    }
}
