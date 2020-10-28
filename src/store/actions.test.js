import { setCurrentMovie, setIsLoading, scrollTop, scrollMovies, setSearch, setFilter, setSorter, setPage, setCurrentMovieById, getMovies, addMovie, editMovie, deleteMovie, resetMovies } from './actions';
import dataHelper from '../util/dataHelper';

describe('actions tests', () => {
    test('setCurrentMovie test', () => {
        const action = setCurrentMovie(42);
        expect(action.type).toEqual('SET_CURRENT_MOVIE');
        expect(action.payload).toEqual(42);
    });

    test('setIsLoading test', () => {
        const action = setIsLoading(42);
        expect(action.type).toEqual('SET_IS_LOADING');
        expect(action.payload).toEqual(42);
    });

    test('scrollTop test', () => {
        const action = scrollTop();
        expect(action.type).toEqual('SCROLL_TOP');
    });

    test('scrollMovies test', () => {
        const action = scrollMovies();
        expect(action.type).toEqual('SCROLL_MOVIES');
    });

    test('setSearch test', () => {
        let dispatch = jest.fn();
        setSearch(42)(dispatch);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_SEARCH',
            payload: 42
        });
    });

    test('setFilter test', () => {
        let dispatch = jest.fn();
        setFilter(42)(dispatch);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_FILTER',
            payload: 42
        });
    });

    test('setSorter test', () => {
        let dispatch = jest.fn();
        setSorter(42)(dispatch);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_SORTER',
            payload: 42
        });
    });

    test('setPage test', () => {
        let dispatch = jest.fn();
        setPage(42)(dispatch);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_PAGE',
            payload: 42
        });
    });

    test('setCurrentMovieById test', async () => {
        let dispatch = jest.fn();
        dataHelper.getMovie = jest.fn((x) => x);
        await setCurrentMovieById(42)(dispatch);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_CURRENT_MOVIE',
            payload: 42
        });
    });

    test('getMovies test', async () => {
        let dispatch = jest.fn();
        let state = jest.fn(() => ({
            filter: 'All',
            sorter: {
                id: 42
            },
            search: 42
        }));
        dataHelper.getMovies = jest.fn(async () => ({
            totalAmount: 42,
            data: 43,
            offset: 0
        }));
        await getMovies(true)(dispatch, state);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_IS_LOADING',
            payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: 'SET_MOVIES',
            payload: {
                totalAmount: 42,
                movies: 43,
                currentPage: 1
            }
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: 'SCROLL_MOVIES'
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
            type: 'SET_IS_LOADING',
            payload: false
        });
    });

    test('addMovie test', async () => {
        let dispatch = jest.fn();
        dataHelper.addMovie = jest.fn(() => { });
        await addMovie()(dispatch);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_IS_LOADING',
            payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: 'SET_IS_LOADING',
            payload: false
        });
    });

    test('editMovie test', async () => {
        let dispatch = jest.fn();
        dataHelper.editMovie = jest.fn(() => { });
        await editMovie()(dispatch);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_IS_LOADING',
            payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: 'SET_IS_LOADING',
            payload: false
        });
    });

    test('deleteMovie test', async () => {
        let dispatch = jest.fn();
        dataHelper.deleteMovie = jest.fn(() => { });
        await deleteMovie({ id: 42 })(dispatch);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_IS_LOADING',
            payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: 'SET_IS_LOADING',
            payload: false
        });
    });

    test('resetMovies test', async () => {
        let dispatch = jest.fn();
        dataHelper.resetMovies = jest.fn(() => { });
        await resetMovies()(dispatch);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: 'SET_IS_LOADING',
            payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: 'SET_IS_LOADING',
            payload: false
        });
    });
});
