import React from 'react';
import Movies from './components/Movies';
import Logo from './components/Logo';
import Wrapper from './containers/Wrapper';
import Posters from './containers/Posters';
import Footer from './containers/Footer';
import Header from './components/Header';
import ColoredBackground from './containers/ColoredBackground';

import '../fonts/fonts.css';
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <>
                <Posters>
                    <Wrapper>
                        <Header />
                    </Wrapper>
                </Posters>
                <ColoredBackground color='var(--c3)'>
                    <Wrapper>
                        <Movies />
                    </Wrapper>
                </ColoredBackground>
                <Footer>
                    <Wrapper>
                        <Logo />
                    </Wrapper>
                </Footer>
            </>
        );
    }
}
