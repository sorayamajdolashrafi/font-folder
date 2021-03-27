import request from 'superagent';

const URL = 'https://font-folder.herokuapp.com';
// const URL = 'http://localhost:3000'

export async function getFonts(query) {

    const response = await request
        .get(`${URL}/fonts?sort=${query}`)

    return response.body;    
}

export async function getCategories() {

    const response = await request
        .get(`${URL}/categories`)

    return response.body;
}

export async function getFavorites(token) {
    
    const response = await request
        .get(`${URL}/api/favorites`)
        .set('Authorization', token)

    return response.body;
}

export async function addFavorite(font, token) {
    
    const response = await request
        .post(`${URL}/api/favorites`)
        .set('Authorization', token)
        .send(font)

    return response.body;
}

export async function deleteFavorite(fontName, token) {

    const response = await request
        .delete(`${URL}/api/favorites/${fontName}`)
        .set('Authorization', token)

    return response.body;
}