import React, { Component } from 'react';
import { getFonts } from '../utils/api-utils.js';


export default class AllFontImport extends Component {
    state = {
        fonts: [],
        sort: 'alpha'
    }

    // a function that fetches all fonts and returns the name
    fetchFonts = async () => {
        const fontsForever = await getFonts(this.state.sort);

        const fontName = fontsForever.name;

        this.setState({ fonts: fontName })
    }

    // a function that takes the names and replaces the spaces with '+'


    // a function that strings together all the fonts with & between them

    // lin k = `https://fonts.googleapis.com/css2?${all the fonts}display=swap`

    render() {
        const shapedResponse = fonts.map(font => {
            const regex = /\s/gm;
            const str = `${font}`;
            const subst = '+';
            const urlName = str.replace(regex, subst);

        return (
            <head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />  
                <link href="https://fonts.googleapis.com/css2?family=Oi&family=Roboto+Slab&family=Source+Code+Pro&display=swap" rel="stylesheet" />   
            </head>
        )
    }
}
