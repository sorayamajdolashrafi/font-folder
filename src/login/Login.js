import React, { Component } from 'react';
import './Login.css';
import LoginForm from '../components/LoginForm.js';
import { loginOrSignup } from '../utils/auth-utils.js';

export default class Sign extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmailChange = (e) => this.setState({ email: e.target.value })

    handlePasswordChange = (e) => this.setState({ password: e.target.value })

    handleSubmit = async e => {
        e.preventDefault();

        try {
            const user = await loginOrSignup(this.state.email, this.state.password);

            this.props.handleUserChange(user);

            this.props.history.push('/search');
        } catch(e) {
            this.setState({ error: e.response.body.error })
        }
        console.log('Hey bebe', e)
    }

    render() {
        return (

            //add hidden div for error
            <div className="loginMain">
                <LoginForm 
                    handleSubmit={this.handleSubmit}
                    email={this.state.email}
                    handleEmailChange={this.handleEmailChange}
                    password={this.state.password}
                    handlePasswordChange={this.handlePasswordChange}/>
            </div>
        )
    }
}
