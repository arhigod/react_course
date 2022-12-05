import moviesMock from '../../mockdata/movies.json';

const service = 'https://arhigod-movies-arhigod.amvera.io';

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
            const response = await fetch(service + '/movies?' + new URLSearchParams(params));
            const data = await response.json();
            return data;
        } catch (e) {
            return (console.log('mockdata is used'), moviesMock);
        }
    },

    getMovie: async function (id) {
        try {
            const response = await fetch(service + '/movies/' + id);
            const data = await response.json();
            return data;
        } catch (e) {
            return (console.log('mockdata is used'), moviesMock.data[0]);
        }
    },

    addMovie: async function (movie) {
        const response = await fetch(service + '/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        const data = await response.json();
        return data.messages ? Promise.reject(JSON.stringify(data.messages, 0, 2)) : data;
    },

    editMovie: async function (movie) {
        const response = await fetch(service + '/movies', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        const data = await response.json();
        return data.messages ? Promise.reject(JSON.stringify(data.messages, 0, 2)) : data;
    },

    deleteMovie: async function (id) {
        const response = await fetch(service + '/movies/' + id, {
            method: 'DELETE'
        });
        return response;
    },

    resetMovies: async function () {
        const response = await fetch(service + '/resetMovies');
        return response;
    }
};
