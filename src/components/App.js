//App Template to be used on everypage
import React, { PropTypes } from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>header...</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;