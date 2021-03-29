import React, { Component } from 'react';
import './Login.css';
import LoginForm from '../components/LoginForm.js';
import { signUp, login } from '../utils/auth-utils.js';

export default class Sign extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        login: false,
        signup: false
    }

    handleLoginMode = (e) => this.setState({ login: e.target.value })

    handleSignupMode = () => this.setState({ signup: true })

    handleEmailChange = (e) => this.setState({ email: e.target.value })

    handlePasswordChange = (e) => this.setState({ password: e.target.value })

    handleSignupSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await signUp(this.state.email, this.state.password);

            this.props.handleUserChange(user);

            this.props.history.push('/search');
        } catch(e) {
            this.setState({ error: e.response.body.error })
        }
    }

    handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await login(this.state.email, this.state.password);

            this.props.handleUserChange(user);

            this.props.history.push('/search');
        } catch(e) {
            this.setState({ error: e.response.body.error })
        }
    }

    render() {
        return (

            <div className="loginMain">
                
                {(!this.state.login && !this.state.signup) &&
                <>
                    <div className='buttonWrapper'>
                        <button 
                            className='loginButton'
                            value={true}
                            onClick={this.handleLoginMode}
                        >login</button>
                        <button 
                            className='loginButton'
                            onClick={this.handleSignupMode}
                        >signup</button>
                    </div>
                </>}
                
                {this.state.login &&
                <>
                    <div className='error'>login {this.state.error}</div>

                    <LoginForm 
                        handleSubmit={this.handleLoginSubmit}
                        email={this.state.email}
                        handleEmailChange={this.handleEmailChange}
                        password={this.state.password}
                        handlePasswordChange={this.handlePasswordChange}/>
                </>}

                {this.state.signup &&
                <>
                    <div className='error'>signup {this.state.error}</div>

                    <LoginForm 
                        handleSubmit={this.handleSignupSubmit}
                        email={this.state.email}
                        handleEmailChange={this.handleEmailChange}
                        password={this.state.password}
                        handlePasswordChange={this.handlePasswordChange}/>
                </>}
                
            </div>
        )
    }
}
