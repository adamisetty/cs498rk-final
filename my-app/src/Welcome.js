import React from 'react';
import './welcome.css';

class Welcome extends React.Component {

    constructor(props){
        //needs to include user information somehow
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Welcome [name]!</h1>
            </div>
        )
    }
}

export default Welcome;