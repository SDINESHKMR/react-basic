export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user')); 
    if (user && user.token) {
        return { 'x-api-key': 'G0OndZH93PuXhhZk','content-type': 'application/json','Authorization': 'Bearer ' + user.token };
    } else {
        return { 'x-api-key': 'G0OndZH93PuXhhZk','content-type': 'application/json'};
    }
}