import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import MoviesList from './MoviesList';
import ErrorBoundary from '../../containers/ErrorBoundary';
import moviesMock from '../../../mockdata/movies.json';

class Movies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            categories: [
                { id: 'all', text: 'All' },
                { id: 'documentary', text: 'Documentary' },
                { id: 'comedy', text: 'Comedy' },
                { id: 'horror', text: 'Horror' },
                { id: 'crime', text: 'Crime' }
            ],
            sortItems: [
                { id: 'rel_date', text: 'Release date' },
                { id: 'rate', text: 'Rate' },
                { id: 'popularity', text: 'Popularity' }
            ]
        };
        this.retriveMovies();
    }

    retriveMovies() {
        fetch('qwe')
            .then(response => response.ok ? response.data : (console.log('mockdata is used'), moviesMock))
            .catch(() => (console.log('mockdata is used'), moviesMock))
            .then(movies => {
                this.setState({
                    movies: movies
                });
            });
    }

    render() {
        return (
            <ErrorBoundary>
                <Toolbar categories={this.state.categories} sortItems={this.state.sortItems} />
                <MoviesList items={this.state.movies.slice(0, 9)} />
            </ErrorBoundary>
        );
    }
}

Movies.propTypes = {
    className: PropTypes.string
};
Movies.defaultProps = {
    className: ''
};
export default Movies;
