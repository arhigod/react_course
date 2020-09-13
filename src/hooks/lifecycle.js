import { useEffect } from 'react';

const useComponentDidMount = (callback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { callback(); }, []);
};

const useComponentDidUpdate = (callback, memo) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
    useEffect(() => { callback(); }, memo);
};

const useComponentDidUnmount = (callback, memo) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => callback, memo);
};

export {useComponentDidMount, useComponentDidUpdate, useComponentDidUnmount};
