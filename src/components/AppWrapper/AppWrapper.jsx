import React from 'react';
import { Provider } from 'react-redux';
import {Switch, Route } from 'react-router-dom';
import App from '../App';
import Page404 from '../Page404';

// eslint-disable-next-line react/prop-types
export default function AppWrapper({ Router, location, context, store }) {
    return (
        <Provider store={store}>
            <Router location={location} context={context}>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/search/:searchValue' component={App} />
                    <Route path='/movie/:movieId' component={App} />
                    <Route path='*' component={Page404} />
                </Switch>
            </Router>
        </Provider>
    );
}
