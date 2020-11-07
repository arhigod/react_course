const reducers = (state, { type, payload }) => {
    switch (type) {
        case 'SET_MOVIES':
            return { ...state, ...payload };
        case 'SET_CURRENT_MOVIE':
            return { ...state, currentMovie: payload };
        case 'SET_SEARCH':
            return { ...state, search: payload };
        case 'SET_FILTER':
            return { ...state, filter: payload };
        case 'SET_SORTER':
            return { ...state, sorter: payload };
        case 'SCROLL_TOP':
            return { ...state, scrollTop: state.scrollTop + 1 };
        case 'SCROLL_MOVIES':
            return { ...state, scrollMovies: state.scrollMovies + 1 };
        case 'SET_PAGE':
            return { ...state, currentPage: payload };
        case 'SET_IS_LOADING':
            return { ...state, isLoading: payload };
        default:
            return state;
    }
};

export default reducers;
