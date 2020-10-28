import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useComponentDidMount, useComponentDidUpdate } from '../../hooks/lifecycle';
import { getMovies, resetMovies, setSearch, setCurrentMovieById, setCurrentMovie } from '../../store/actions';
import Movies from '../Movies';
import Button from '../Button';
import Logo from '../Logo';
import Wrapper from '../Wrapper';
import WrapperPosters from '../WrapperPosters';
import Footer from '../Footer';
import Header from '../Header';

import '../../../fonts/fonts.css';
import './App.css';

const App = ({ scrollTop, scrollMovies, getMovies, resetMovies, setSearch, search, currentMovie, setCurrentMovieById, setCurrentMovie }) => {
    const params = useParams();

    useComponentDidMount(() => {
        if (params.searchValue) {
            setSearch(params.searchValue);
        } else {
            getMovies(true, true);
        }
        if (params.movieId) {
            setCurrentMovieById(params.movieId);
        }
    });

    useComponentDidUpdate(() => {
        if (params.searchValue && params.searchValue !== search) {
            setSearch(params.searchValue);
        }
        if (params.movieId && (!currentMovie || params.movieId !== currentMovie.id + '')) {
            setCurrentMovieById(params.movieId);
        }
        if (!params.searchValue && !params.movieId && search) {
            setSearch('', true);
        }
        if (!params.searchValue && !params.movieId && currentMovie) {
            setCurrentMovie(null);
        }
    }, [params, search, setSearch, currentMovie, setCurrentMovieById]);

    useComponentDidUpdate(() => {
        if (scrollTop > 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [scrollTop]);

    useComponentDidUpdate(() => {
        if (scrollMovies > 0) {
            document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollMovies]);

    return (
        <>
            <Button className='resetMoviesButton' text='Reset BackEnd' type='reject' onClick={resetMovies} />
            <WrapperPosters>
                <Wrapper>
                    <Header />
                </Wrapper>
            </WrapperPosters>
            <main>
                <Wrapper>
                    <Movies />
                </Wrapper>
            </main>
            <Footer>
                <Wrapper>
                    <Logo />
                </Wrapper>
            </Footer>
        </>
    );
};

const mapStateToProps = (state) => ({
    search: state.search,
    currentMovie: state.currentMovie,
    scrollTop: state.scrollTop,
    scrollMovies: state.scrollMovies
});

const mapDispatchToProps = dispatch => ({
    setCurrentMovieById: (id) => dispatch(setCurrentMovieById(id)),
    setCurrentMovie: (movie) => dispatch(setCurrentMovie(movie)),
    getMovies: (newSearch, withoutScroll) => dispatch(getMovies(newSearch, withoutScroll)),
    resetMovies: () => dispatch(resetMovies()),
    setSearch: (value, withoutScroll) => dispatch(setSearch(value, withoutScroll))
});

App.propTypes = {
    setCurrentMovieById: PropTypes.func,
    setCurrentMovie: PropTypes.func,
    setSearch: PropTypes.func,
    search: PropTypes.string,
    scrollTop: PropTypes.number,
    scrollMovies: PropTypes.number,
    getMovies: PropTypes.func,
    resetMovies: PropTypes.func,
    currentMovie: PropTypes.object
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
