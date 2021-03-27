import React, { Component } from 'react';
import { addFavorite, deleteFavorite, getFavorites, getFonts } from '../utils/api-utils.js';
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

    fetchFavorites = async () => {
        const favorites = await getFavorites(this.props.user.token);

        this.setState({ favorites })
    }

    handleFave = async (font) => {
        await addFavorite(font, this.props.user.token);

        await this.fetchFavorites();
    }

    handleUnfave = async (font) => {
        await deleteFavorite(font.name, this.props.user.token)

        await this.fetchFavorites();
    }

    favoriteCheck = (font) => {
        if (!this.props.user.token) return true;
        
        const  isFave = this.state.favorites.find(favorite => favorite.name === font.name)

        return Boolean(isFave);
    }

    render() {
        const filteredFonts = this.state.fonts;

        return (
            <div className="searchMain">
                <div className="sidebar">
                    -select to order by-
                    -search input-
                    -categories checkboxes-
                </div>
            
                <SearchList
                    filteredFonts={filteredFonts}
                    favoriteCheck={this.favoriteCheck}
                    handleFave={this.handleFave}
                    handleUnfave={this.handleUnfave}
                    handleDetails={this.handleDetails}
                />
                
            </div>
        )
    }
}
