import React, { useState, useCallback } from 'react';
import { useComponentDidMount } from '../../hooks/lifecycle';
import Movies from '../../components/Movies';
import Logo from '../../components/Logo';
import Wrapper from '../../components/Wrapper';
import WrapperPosters from '../../components/WrapperPosters';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ModalMovieDelete from '../../components/ModalMovieDelete';
import ModalMovieDetail from '../../components/ModalMovieDetail';
import moviesMock from '../../../mockdata/movies.json';

import '../../../fonts/fonts.css';
import './App.css';

export default function App() {
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [openedModal, setOpenedModal] = useState('');
    const [isShowCurrentMovie, setIsShowCurrentMovie] = useState(false);

    useComponentDidMount(() => {
        fetch('qwe')
            .then(response => response.ok ? response.data : (console.log('mockdata is used'), moviesMock))
            .catch(() => (console.log('mockdata is used'), moviesMock))
            .then(movies => {
                setMovies(movies);
            });
    });

    const onAddMovieClick = useCallback(() => {
        setOpenedModal('AddMovie');
    }, []);

    const onSubmitModalAddMovieClick = useCallback((movie) => {
        setOpenedModal('');
        alert(JSON.stringify(movie));
    }, []);

    const onMovieEditClick = useCallback((movie) => {
        setCurrentMovie(movie);
        setOpenedModal('EditMovie');
    }, []);

    const onSaveModalEditMovieClick = useCallback((movie) => {
        setOpenedModal('');
        alert(JSON.stringify(movie));
    }, []);

    const onMovieDeleteClick = useCallback((movie) => {
        setCurrentMovie(movie);
        setOpenedModal('DeleteMovie');
    }, []);

    const onConfirmMovieDeleteClick = useCallback(() => {
        setOpenedModal('');
        alert(currentMovie.title + ' is deleted');
    }, [currentMovie]);

    const onCloseModalClick = useCallback(() => {
        setOpenedModal('');
    }, []);

    const onMovieClick = useCallback((movie) => {
        setCurrentMovie(movie);
        setIsShowCurrentMovie(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const onBackClick = useCallback(()=>{
        setIsShowCurrentMovie(false);
    }, []);

    return (
        <>
            <div className={openedModal ? 'blur' : ''}>
                <WrapperPosters>
                    <Wrapper>
                        <Header onAddMovieClick={onAddMovieClick} onSearchIconClick={onBackClick} showMovieDetails={isShowCurrentMovie} movie={currentMovie} />
                    </Wrapper>
                </WrapperPosters>
                <main>
                    <Wrapper>
                        <Movies movies={movies} onMovieClick={onMovieClick} onMovieEditClick={onMovieEditClick} onMovieDeleteClick={onMovieDeleteClick} />
                    </Wrapper>
                </main>
                <Footer>
                    <Wrapper>
                        <Logo />
                    </Wrapper>
                </Footer>
            </div>
            {openedModal === 'AddMovie' && <ModalMovieDetail onCloseClick={onCloseModalClick} onSubmitClick={onSubmitModalAddMovieClick} />}
            {openedModal === 'EditMovie' &&
                <ModalMovieDetail onCloseClick={onCloseModalClick} onSubmitClick={onSaveModalEditMovieClick} movie={currentMovie} />}
            {openedModal === 'DeleteMovie' && <ModalMovieDelete onCloseClick={onCloseModalClick} onSubmitClick={onConfirmMovieDeleteClick} />}
        </>
    );
}
