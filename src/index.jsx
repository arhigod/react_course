import React from 'react';
import { render } from 'react-dom';
import { createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';
import App from './components/App';

import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
