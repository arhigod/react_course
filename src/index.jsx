import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './store/reducers';
import App from './components/App';
import Page404 from './components/Page404';

import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/search/:searchValue' component={App} />
                <Route path='/movie/:movieId' component={App} />
                <Route path='*' component={Page404} />
            </Switch>
        </Router>
    </Provider>,
    document.querySelector('#root')
);
