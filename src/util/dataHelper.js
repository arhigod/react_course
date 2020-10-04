import moviesMock from '../../mockdata/movies.json';

export default {
    getMovies: async function ({ sorter, filter, search, offset }) {
        try {
            const params = {
                limit: 12,
                sortOrder: 'desc',
                searchBy: 'title',
                search: search,
                sortBy: sorter,
                filter: filter,
                offset: offset
            };
            const response = await fetch('https://arhigod-movies.herokuapp.com/movies?' + new URLSearchParams(params));
            const data = await response.json();
            return data;
        } catch (e) {
            return (console.log('mockdata is used'), moviesMock.slice(0, 9));
        }
    },

    addMovie: async function (movie) {
        const response = await fetch('https://arhigod-movies.herokuapp.com/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        const data = await response.json();
        return data.messages ? Promise.reject(data.messages) : data;
    },

    editMovie: async function (movie) {
        const response = await fetch('https://arhigod-movies.herokuapp.com/movies', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        const data = await response.json();
        return data.messages ? Promise.reject(data.messages) : data;
    },

    deleteMovie: async function (id) {
        const response = await fetch('https://arhigod-movies.herokuapp.com/movies/' + id, {
            method: 'DELETE'
        });
        return response;
    },

    resetMovies: async function () {
        const response = await fetch('https://arhigod-movies.herokuapp.com/resetMovies');
        return response;
    }
};
