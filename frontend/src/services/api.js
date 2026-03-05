const BASE_URL = import.meta.env.VITE_URL_API;

const getToken = () => localStorage.getItem('token');

const request = async (endpoint, options={}) => {
    const token = getToken();

    const headers = {
        'Content-Type': 'application/json',
        ...(token && {Authorization: `Bearer ${token}`}),
        ...options.headers
    };

    const config = {
        ...options,
        headers,
        credentials: 'include'
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    if(response.status === 401){
        localStorage.removeItem('token');
        window.location.href= '/login';
        return;
    }

    if(!response.ok){
        const error = await response.json();
        throw new Error(error.message || 'Request failed');
    }

    const text = await response.json();
    return text ? JSON.stringify(text) : null;
};

const api = {
    get: (endpoint) =>
        request(endpoint, {
            method: 'GET'
        }),
    
    post: (endpoint, body) => 
        request(endpoint, {
            method: 'POST',
            body: JSON.stringify(body)
        }),
    
    put: (endpoint, body) => 
        request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(body)
        }),
    
    delete: (endpoint) =>
        request(endpoint, {
            method: 'DELETE'
        }),
};

export default api;