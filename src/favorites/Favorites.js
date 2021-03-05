import React, { Component } from 'react';
import './Favorites.css';
import { getFavorites, addFavorite, deleteFavorite } from '../utils/api-utils.js';
import FavoritesList from './FavoritesList.js';

export default class Favorites extends Component {
    state = {
        favorites: []
    }

    componentDidMount = async () => {
        const favorites = await getFavorites(this.props.user.token);

        this.setState({ favorites })
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
        const filteredFaves = this.state.favorites;

        return (
            <FavoritesList
            filteredFonts={filteredFaves}
            favoriteCheck={this.favoriteCheck}
            handleFave={this.handleFave}
            handleUnfave={this.handleUnfave}
            handleDetails={this.handleDetails}
        />
        )
    }
}
