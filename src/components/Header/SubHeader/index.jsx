import React from 'react';
import Logo from '../../Logo';
import ButtonAddMovie from './ButtonAddMovie';

import './style.css';

export default class SubHeader extends React.Component {
    render() {
        return (
            <div className='header_subHeader'>
                <Logo />
                <ButtonAddMovie />
            </div>
        );
    }
}
