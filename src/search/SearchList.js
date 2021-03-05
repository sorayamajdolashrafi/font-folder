import React, { Component } from 'react';
import FontItem from '../components/FontItem.js';

export default class SearchList extends Component {
    render() {

        const FontWrapper = this.props.filteredFonts.map(
            font => <FontItem
                key={font.name}
                fontProp={font}
                handleFave={this.props.handleFave}
                handleUnfave={this.props.handleUnfave}
                handleDetails={this.props.handleDetails} />
        )

        return (
            <ul className="fontWrapper">
                {FontWrapper}
            </ul>
        )
    }
}
