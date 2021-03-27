import React, { Component } from 'react';
import './LoginForm.css';

export default class LoginForm extends Component {
    render() {
        return (

            <form
                className="form" 
                onSubmit={this.props.handleSubmit}>

                <label className="loginLabel">
                    <input 
                        className="loginInput"
                        value={this.props.email}
                        onChange={this.props.handleEmailChange}
                        placeholder="yikes@yikes.com" />
                    <h3 className="loginH3">email</h3>
                </label>

                <label className="loginLabel">
                    <input 
                        className="loginInput"
                        value={this.props.password}
                        onChange={this.props.handlePasswordChange}
                        placeholder="1234" 
                        type="password" />
                    <h3 className="loginH3">password</h3>
                </label>

                <button className="loginButton">it's font time!</button>
            </form>

        )
    }
}
