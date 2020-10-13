import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import Logo from '../Logo';
import Wrapper from '../Wrapper';
import Footer from '../Footer';
import src404 from '../../../images/404.png';

import './Page404.css';

const Page404 = () => {
    const history = useHistory();

    const navToHome = useCallback(() => {
        history.push('/');
    }, [history]);

    return (
        <div className='page404'>
            <Wrapper>
                <Logo />
                <p>Page Not Found</p>
                <img src={src404} />
                <Button text='Go back to home' type='reject' onClick={navToHome} />
            </Wrapper>
            <Footer>
                <Wrapper>
                    <Logo />
                </Wrapper>
            </Footer>
        </div>
    );
};

export default Page404;
