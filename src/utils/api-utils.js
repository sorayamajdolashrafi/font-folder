import request from 'superagent';

const URL = 'https://font-folder.herokuapp.com';

export async function signUp(email, password) {

    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })
    
    return response.body;
}

export async function signIn(email, password) {

    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })

    return response.body;
}

export async function getFonts(sort) {

    const response = await request
        .get(`${URL}/fonts?sort=${sort}`)

    return response.body.results;
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

export async function deleteFavorite(fontID, token) {

    const response = await request
        .delete(`${URL}/api/favorites/${fontID}`)
        .set('Authorization', token)

    return response.body;
}