import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Poster = ({ className, src }) => {
    const setDefaulPoster = useCallback((e) => {
        e.target.src = './images/defaultPoster.jpg';
    }, []);

    return (
        <img className={className} src={src} onError={setDefaulPoster} />
    );
};

Poster.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
};
Poster.defaultProps = {
    className: '',
    src: './images/defaultPoster.jpg'
};
export default Poster;
