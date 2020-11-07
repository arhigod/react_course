import reducers from './reducers';

describe('reducers tests', () => {
    test('SET_MOVIES test', () => {
        const newStore = reducers({}, {
            type: 'SET_MOVIES',
            payload: {
                totalAmount: 42,
                movies: [{ x: 1 }],
                currentPage: 3
            },
        });

        expect(newStore.totalAmount).toEqual(42);
        expect(newStore.movies).toEqual([{ x: 1 }]);
        expect(newStore.currentPage).toEqual(3);
    });

    test('SET_CURRENT_MOVIE test', () => {
        const newStore = reducers({}, {
            type: 'SET_CURRENT_MOVIE',
            payload: {
                id: 42
            },
        });

        expect(newStore.currentMovie).toEqual({ id: 42 });
    });

    test('SET_SEARCH test', () => {
        const newStore = reducers({}, {
            type: 'SET_SEARCH',
            payload: '42',
        });

        expect(newStore.search).toEqual('42');
    });

    test('SET_FILTER test', () => {
        const newStore = reducers({}, {
            type: 'SET_FILTER',
            payload: '42',
        });

        expect(newStore.filter).toEqual('42');
    });

    test('SET_SORTER test', () => {
        const newStore = reducers({}, {
            type: 'SET_SORTER',
            payload: '42',
        });

        expect(newStore.sorter).toEqual('42');
    });

    test('SCROLL_TOP test', () => {
        const newStore = reducers({
            scrollTop: 42
        }, {
            type: 'SCROLL_TOP'
        });

        expect(newStore.scrollTop).toEqual(43);
    });

    test('SCROLL_MOVIES test', () => {
        const newStore = reducers({
            scrollMovies: 42
        }, {
            type: 'SCROLL_MOVIES'
        });

        expect(newStore.scrollMovies).toEqual(43);
    });

    test('SET_PAGE test', () => {
        const newStore = reducers({}, {
            type: 'SET_PAGE',
            payload: 42,
        });

        expect(newStore.currentPage).toEqual(42);
    });

    test('SET_IS_LOADING test', () => {
        const newStore = reducers({}, {
            type: 'SET_IS_LOADING',
            payload: true,
        });

        expect(newStore.isLoading).toEqual(true);
    });

    test('wrong type test', () => {
        const newStore = reducers({}, {
            type: 'wrongType'
        });

        expect(newStore).toEqual({});
    });
});
