import React from 'react';
import SubHeader from './SubHeader';
import Search from './Search';
import ErrorBoundary from '../../containers/ErrorBoundary';

export default class Header extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <div style={{ height: '400px' }}>
                    <SubHeader />
                    <Search style={{ margin: '50px 50px 0' }} />
                </div>
            </ErrorBoundary>
        );
    }
}
