import React, { Component } from 'react';
import './FontItem.css';

export default class FontItem extends Component {

    render() {
        return (
            <label className="itemLabel">
                <button 
                    className="itemFaveButton"
                    onClick={this.props.handleFave}>fave</button>
                <button 
                    className="itemUnfaveButton"
                    onClick={this.props.handleUnfave}>unfave</button>
                <h1 className="itemH1">{this.props.fontProp.name}</h1>
                <p className="itemP">A quick brown fox jumps over the lazy dog.</p>                
                <button 
                    className="itemButton"
                    onClick={this.props.handleDetails}>see more details</button>
            </label>
        )
    }
}
