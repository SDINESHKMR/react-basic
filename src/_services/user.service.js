import { config } from '../env';
import { authHeader } from '../_helpers';

export const userService = {
    login
};
 
function login(data) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader()},
        body: JSON.stringify(data)
    };
    return fetch(config.apiUrl+`login`, requestOptions)
        .then(handleResponse)
        .then(data => {
            // login successful if there's a jwt token in the response
            if (data.result.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(data.result));
            }
 
            return data;
        });
}
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
 
        return data;
    });
}