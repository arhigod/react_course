import React, { useState, useCallback, useEffect } from 'react';
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

    useEffect(() => {
        retriveMovies();
    }, []);

    const retriveMovies = () => {
        fetch('qwe')
            .then(response => response.ok ? response.data : (console.log('mockdata is used'), moviesMock))
            .catch(() => (console.log('mockdata is used'), moviesMock))
            .then(movies => {
                setMovies(movies);
            });
    };

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

    return (
        <>
            <div className={openedModal ? 'blur' : ''}>
                <WrapperPosters>
                    <Wrapper>
                        <Header onAddMovieClick={onAddMovieClick} />
                    </Wrapper>
                </WrapperPosters>
                <main>
                    <Wrapper>
                        <Movies movies={movies} onMovieEditClick={onMovieEditClick} onMovieDeleteClick={onMovieDeleteClick} />
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
