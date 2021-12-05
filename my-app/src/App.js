import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './Login';
import Welcome from './Welcome';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//do log in authentication here...
class App extends React.Component {
    constructor(props){
        super(props);
    }
//routing needs to be done here as well!!!
    render() {
        return (
            <div className="login-body">
                <Welcome></Welcome>
                {/* <Login></Login> */}
            </div>
        )
    }
}

export default App;
