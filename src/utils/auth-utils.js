import request from 'superagent';

const URL = 'https://font-folder.herokuapp.com';
// const URL = 'http://localhost:3000'

export async function signUp(email, password) {
	
	const response = await request
		.post(`${URL}/auth/signup`)
		.send({ email, password })

	return response.body;
}

export async function login(email, password) {
	
	const response = await request
		.post(`${URL}/auth/signin`)
		.send({ email, password })

	return response.body;
}