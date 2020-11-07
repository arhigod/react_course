import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialState = {
    movies: [],
    totalAmount: 0,
    currentMovie: null,
    search: '',
    filter: 'All',
    sorter: {
        id: 'release_date',
        name: 'Release date'
    },
    currentPage: 1,
    scrollTop: 0,
    scrollMovies: 0,
    isLoading: false
};

export default (preloadedState = {}) => createStore(
    reducer,
    Object.assign({}, initialState, preloadedState),
    applyMiddleware(thunk)
);
