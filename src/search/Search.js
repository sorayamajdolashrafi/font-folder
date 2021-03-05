import React, { Component } from 'react';
import { getFonts } from '../utils/api-utils.js';
import './Search.css';
import SearchList from './SearchList.js';

export default class Search extends Component {
    state = {
        fonts: [],
        favorites: [],
        sort: 'popularity'
    }

    componentDidMount = async () => {
        if (this.props.user.token) await this.fetchFonts();
        
    }

    fetchFonts = async () => {
        const fonts = await getFonts(this.state.sort);

        this.setState({ fonts })
    }

    render() {
        const filteredFonts = this.state.fonts;

        return (
            <div className="searchMain">
            
                <SearchList
                    filteredFonts={filteredFonts}
                    handleFave={this.handleFave}
                    handleUnfave={this.handleUnfave}
                    handleDetails={this.handleDetails}
                />
                
            </div>
        )
    }
}
