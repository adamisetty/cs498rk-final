import React from 'react';
import './login.css';

class Login extends React.Component {
    
    constructor(props){
        super(props);


        this.submitLogin = this.submitLogin.bind(this);
        console.log('IN CONSTUCTOR!')
    }

    async submitLogin() {
        //do log-in stuff here...
    }

    render() {
        return (
            <div className="login-body">
                <h1 className="login-header"> Login </h1>
                <div className="login-form">
                    <form>
                        <label for="username">Username</label> 
                        <br/>
                        <input type="text" id="username" name="username" size="70"></input>
                        <br/> <br/>
                        <label for="fname">Password</label> 
                        <br/>
                        <input type="password" id="fname" name="fname" size="70"></input>
                        <br/>
                    </form>
                </div>
                <div className="login-submit-container">
                <br/> <br/>
                    <button className="login-submit" onClick={() => this.submitLogin()}> Submit </button>
                </div>
            </div>
        )
    }
}

export default Login;