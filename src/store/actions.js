import dataHelper from '../util/dataHelper';

export const setCurrentMovie = (movie) => (dispatch) => {
    dispatch({
        type: 'SET_CURRENT_MOVIE',
        payload: movie
    });
    dispatch(scrollTop());
};

export const setSearch = (search) => (dispatch) => {
    dispatch({
        type: 'SET_SEARCH',
        payload: search
    });
    dispatch(getMovies(true));
};

export const setFilter = (filter) => (dispatch) => {
    dispatch({
        type: 'SET_FILTER',
        payload: filter
    });
    dispatch(getMovies(true));
};

export const setSorter = (sorter) => (dispatch) => {
    dispatch({
        type: 'SET_SORTER',
        payload: sorter
    });
    dispatch(getMovies(true));
};

export const getMovies = (newSearch) => async (dispatch, getState) => {
    dispatch(setIsLoading(true));

    const state = getState();
    const data = await dataHelper.getMovies({
        filter: state.filter === 'All' ? '' : state.filter,
        sorter: state.sorter.id,
        search: state.search,
        offset: newSearch ? 0 : (state.currentPage - 1) * 12
    });

    dispatch({
        type: 'SET_MOVIES',
        payload: {
            totalAmount: data.totalAmount,
            movies: data.data,
            currentPage: Math.ceil(data.offset / 12) + 1
        }
    });

    dispatch(scrollMovies());
    dispatch(setIsLoading(false));
};

export const addMovie = (movie) => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        await dataHelper.addMovie(movie);
        dispatch(getMovies(true));
    } finally {
        dispatch(setIsLoading(false));
    }
};

export const editMovie = (movie) => async dispatch => {
    dispatch(setIsLoading(true));

    try {
        await dataHelper.editMovie(movie);
        dispatch(getMovies());
    } finally {
        dispatch(setIsLoading(false));
    }
};

export const deleteMovie = (movie) => async dispatch => {
    dispatch(setIsLoading(true));

    await dataHelper.deleteMovie(movie.id);
    dispatch(getMovies(true));

    dispatch(setIsLoading(false));
};

export const resetMovies = () => async dispatch => {
    dispatch(setIsLoading(true));

    await dataHelper.resetMovies();
    dispatch(getMovies(true));

    dispatch(setIsLoading(false));
};

export const setPage = (page) => (dispatch) => {
    dispatch({
        type: 'SET_PAGE',
        payload: page
    });
    dispatch(getMovies());
};

export const scrollTop = () => ({
    type: 'SCROLL_TOP'
});

export const scrollMovies = () => ({
    type: 'SCROLL_MOVIES'
});

export const setIsLoading = (isLoading) => ({
    type: 'SET_IS_LOADING',
    payload: isLoading
});
