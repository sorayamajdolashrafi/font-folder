import React, { Component } from 'react';
import './SignForm.css';

export default class SignForm extends Component {
    render() {
        return (

            <form
                className="form" 
                onSubmit={this.props.handleSubmit}>

                <label className="signLabel">
                    <input 
                        className="signInput"
                        value={this.props.email}
                        onChange={this.props.handleEmailChange}
                        placeholder="yikes@yikes.com" />
                    <h3 className="signH3">email</h3>
                </label>

                <label className="signLabel">
                    <input 
                        className="signInput"
                        value={this.props.password}
                        onChange={this.props.handlePasswordChange}
                        placeholder="1234" 
                        type="password" />
                    <h3 className="signH3">password</h3>
                </label>

                <button className="signButton">it's font time!</button>
            </form>

        )
    }
}
