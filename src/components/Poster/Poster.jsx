import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Poster = ({ className, src }) => {
    const setDefaultPoster = useCallback((e) => {
        let img = e.target;
        import('../../../images/defaultPoster.jpg').then(x => {
            img.src = x.default;
        });
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
    src: ''
};
export default Poster;
