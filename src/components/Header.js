import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                
                {
                    (!this.props.user || !this.props.user.token) && <>
                    <NavLink 
                        to="/login" 
                        className="navlink">sign in</NavLink>
                    <NavLink 
                        to="/" 
                        className="navlink">home</NavLink>
                    <NavLink 
                        to="/search" 
                        className="navlink">fonts</NavLink>
                    </>
                }

                {
                    (this.props.user && this.props.user.token) && <>
                    <button
                    className="headerButton"
                    onClick={this.props.handleSignOut}>sign out</button>
                    <NavLink 
                        to="/" 
                        className="navlink">home</NavLink>
                    <NavLink 
                        to="/search" 
                        className="navlink">fonts</NavLink>
                    <NavLink 
                        to="/favorites" 
                        className="navlink">favorites</NavLink>
                    </>
                }
                                
            </div>
        )
    }
}
