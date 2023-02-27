import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li><Link to="./pages/Home/Home">Home</Link></li>
                </ul>
            </div>
        );
    }
}

export default App;