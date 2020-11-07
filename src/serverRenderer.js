import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import fs from 'fs';
import path from 'path';
import AppWrapper from './components/AppWrapper';
import createStore from './store/store.js';
import { getMovies, setCurrentMovieById } from './store/actions';

function renderHtml(html) {
    const data = fs.readFileSync(path.join('./dist', 'index.html'), 'utf8');
    return data.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

export default function serverRenderer() {
    return async (req, res) => {
        const context = {};

        let store;
        if (/^\/search\/.*$/.test(req.url)) {
            let search = req.url.replace('/search/', '');
            store = createStore({ search: search });
            await store.dispatch(getMovies());
        } else if (/^\/movie\/.*$/.test(req.url)) {
            let id = req.url.replace('/movie/', '');
            store = createStore({});
            await store.dispatch(setCurrentMovieById(id));
        } else {
            store = createStore({});
        }

        const renderRoot = () => (
            <AppWrapper
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );

        renderToString(renderRoot());

        if (context.url) {
            res.writeHead(302, {
                Location: context.url
            });
            res.end();
            return;
        }

        const html = renderToString(renderRoot());
        res.send(renderHtml(html));
    };
}
