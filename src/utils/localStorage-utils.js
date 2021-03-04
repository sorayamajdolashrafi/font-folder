export const USER = 'USER'

export function gerUserFromLocalStorage() {
    const user = localStorage.getItem(USER);

    try {
        return JSON.parse(user);

    } catch(e) {
        return {
            email: '',
            id: '',
            token: ''
        }
    }
}

export function putUserInLocalStorage(user) {
    localStorage.setItem(USER, JSON.stringify(user));
}