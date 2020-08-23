import React from 'react';
import PropTypes from 'prop-types';
import { Error } from '@styled-icons/boxicons-regular/Error';

import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        let { error, errorInfo } = this.state;
        let { children } = this.props;

        if (errorInfo) {
            return (
                <div className='error'>
                    <p><Error size='30' />Something went wrong<Error size='30' /></p>
                    <details>
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ErrorBoundary;
