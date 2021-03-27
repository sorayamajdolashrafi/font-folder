// a function that fetches all fonts and returns the name
fetchFonts = async () => {
    const fontsForever = await getFonts(this.state.sort);

    const fontName = fontsForever.name;

    this.setState({ fonts: fontName })
}

// a function that takes the names and replaces the spaces with '+'


// a function that strings together all the fonts with & between them

// link = `https://fonts.googleapis.com/css2?${all the fonts}display=swap`



function formatFontList(fontData) {

    const shapedResponse = fontData.items.map(item => {
      const regex = /\s/gm;
      const str = `${item.family}`;
      const subst = '+';
      const urlName = str.replace(regex, subst);
      
      return {
        name: item.family,
        link: `https://fonts.google.com/specimen/${urlName}?preview.text_type=custom`,
        category: item.category,
        variants: item.variants,
        subsets: item.subsets      
      };
    });
  
    return shapedResponse;
  }
  
  module.exports = { formatFontList };