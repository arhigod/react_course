import React, { useState, useEffect } from 'react';
import Movies from '../../components/Movies';
import Logo from '../../components/Logo';
import Wrapper from '../../components/Wrapper';
import WrapperPosters from '../../components/WrapperPosters';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ModalMovieDetail from '../../components/ModalMovieDetail';
import moviesMock from '../../../mockdata/movies.json';

import '../../../fonts/fonts.css';
import './App.css';

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movies, setMovies] = useState([]);
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

    const onAddMoviePressed = () => {
        setIsModalOpen(true);
        setOpenedModal('AddMovie');
    };

    const onCloseModalPressed = () => {
        setIsModalOpen(false);
        setOpenedModal('');
    };

    return (
        <>
            <div className={isModalOpen ? 'blur' : ''}>
                <WrapperPosters>
                    <Wrapper>
                        <Header onAddMoviePressed={onAddMoviePressed} />
                    </Wrapper>
                </WrapperPosters>
                <main>
                    <Wrapper>
                        <Movies movies={movies} />
                    </Wrapper>
                </main>
                <Footer>
                    <Wrapper>
                        <Logo />
                    </Wrapper>
                </Footer>
            </div>
            {
                openedModal === 'AddMovie' && <ModalMovieDetail onCloseClick={onCloseModalPressed} />
            }
        </>
    );
}
