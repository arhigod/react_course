import React from 'react';

import '../../style/App.css';

class ReactComponent extends React.Component {
    render() {
        return (
            <h2>React.Component</h2>
        );
    }
}
class ReactPureComponent extends React.PureComponent {
    render() {
        return (
            <h3>React.PureComponent</h3>
        );
    }
}

function getFunctionalComponent() {
    return <h4>Functional Component</h4>;
}



export default class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                {
                    React.createElement('h1', null, 'React.createElement')
                }
                <ReactComponent/>
                <ReactPureComponent/>
                {
                    getFunctionalComponent()
                }
            </div>
        );
    }
}