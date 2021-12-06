import React from 'react';
import './welcome.css';

class Welcome extends React.Component {

    constructor(props){
        //needs to include user information somehow
        super(props);
    }

    render() {
        return (
            <div className="welcome-body">
                <h1 className="welcome-header">Welcome [name]!</h1>
                <button className="welcome-favorite-button">Favorites</button>
                <div className="welcome-buttons-container">
                    <button className="welcome-button">Search</button>
                    <button className="welcome-button">Recommend</button>
                </div>
            </div>
        )
    }
}

export default Welcome;