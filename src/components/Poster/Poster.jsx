import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
require('../../../images/defaultPoster.jpg');

const Poster = ({ className, src }) => {
    const setDefaultPoster = useCallback((e) => {
        e.target.src = './images/defaultPoster.jpg';
    }, []);

    return (
        <img className={className} src={src} onError={setDefaultPoster} />
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
