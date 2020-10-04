import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useComponentDidMount, useComponentDidUpdate } from '../../hooks/lifecycle';
import { getMovies, resetMovies } from '../../store/actions';
import Movies from '../Movies';
import Button from '../Button';
import Logo from '../Logo';
import Wrapper from '../Wrapper';
import WrapperPosters from '../WrapperPosters';
import Footer from '../Footer';
import Header from '../Header';

import '../../../fonts/fonts.css';
import './App.css';

const App = ({ scrollTop, scrollMovies, getMovies, resetMovies }) => {
    useComponentDidMount(() => {
        getMovies(true);
    });

    useComponentDidUpdate(() => {
        if (scrollTop > 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [scrollTop]);

    useComponentDidUpdate(() => {
        if (scrollMovies > 1) {
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
    scrollTop: state.scrollTop,
    scrollMovies: state.scrollMovies
});

const mapDispatchToProps = dispatch => ({
    getMovies: (newSearch) => dispatch(getMovies(newSearch)),
    resetMovies: () => dispatch(resetMovies())
});

App.propTypes = {
    scrollTop: PropTypes.number,
    scrollMovies: PropTypes.number,
    getMovies: PropTypes.func,
    resetMovies: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
