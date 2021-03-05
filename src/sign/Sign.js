import React, { Component } from 'react';
import './Sign.css';
import SignForm from '../components/SignForm.js'
import { signIn, signUp } from '../utils/api-utils.js';

export default class Sign extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmailChange = (e) => this.setState({ email: e.target.value })

    handlePasswordChange = (e) => this.setState({ password: e.target.value })

    handleSignUpSubmit = async e => {
        e.preventDefault();

        try {
            const user = await signUp(this.state.email, this.state.password);

            this.props.handleUserChange(user);

            this.props.history.push('/search');
        } catch(e) {
            this.setState({ error: e.response.body.error })
        }
    }

    handleSignInSubmit = async e => {
        e.preventDefault();

        try {
            const user = await signIn(this.state.email, this.state.password);

            this.props.handleUserChange(user);

            this.props.history.push('/search');            
        } catch(e) {
            this.setState({ error: e.response.body.error})
        }
        console.log('oh hi!', this.state)
    }

    render() {
        return (
            <div className="signMain">
                signup
                <SignForm 
                    handleSubmit={this.handleSignUpSubmit}
                    email={this.state.email}
                    handleEmailChange={this.handleEmailChange}
                    password={this.state.password}
                    handlePasswordChange={this.handlePasswordChange}/>

                signin
                <SignForm 
                    handleSubmit={this.handleSignInSubmit}
                    email={this.state.email}
                    handleEmailChange={this.handleEmailChange}
                    password={this.state.password}
                    handlePasswordChange={this.handlePasswordChange}/>
            </div>
        )
    }
}
