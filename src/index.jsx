import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppWrapper from './components/AppWrapper';
import createStore from './store/store.js';

import './index.css';

if (!document.querySelector('#root').innerHTML) {
    render(
        <AppWrapper Router={BrowserRouter} store={createStore()} />,
        document.querySelector('#root')
    );
}
