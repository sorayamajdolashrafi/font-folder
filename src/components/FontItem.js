import React, { Component } from 'react';
import './FontItem.css';

export default class FontItem extends Component {

    render() {
        return (
            <label className="itemLabel">
                <div className="itemButtonWrapper">
                {
                    this.props.favoriteCheck(this.props.fontProp)
                        ? <button 
                        className="itemUnfaveButton"
                        onClick={() => this.props.handleUnfave(this.props.fontProp)}>unfave</button>
                        : <button 
                        className="itemFaveButton"
                        onClick={() => this.props.handleFave(this.props.fontProp)}>fave</button>
                }
                </div>
                <h1 className="itemH1"
                    style={ {fontFamily: `'${this.props.fontProp.name}', ${this.props.fontProp.category}`} }>{this.props.fontProp.name}</h1>
                <p className="itemP"
                    style={ {fontFamily: `'${this.props.fontProp.name}', ${this.props.fontProp.category}`} }>A quick brown fox jumps over the lazy dog.</p>                
                <button 
                    className="itemButton"
                    onClick={() => this.props.handleDetails}>see more details</button>
            </label>
        )
    }
}
