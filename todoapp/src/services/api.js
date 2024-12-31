import axios from 'axios';

const API_URL = 'http://localhost:9000/api';

export const signup = (userData) => axios.post(`${API_URL}/api/auth/signup`, userData);
export const login = (userData) => axios.post(`${API_URL}/auth/login`, userData);
export const createTodo = (todoData, token) => axios.post(`${API_URL}/todos`, todoData, {
    headers: { Authorization: `Bearer ${token}` }
});
export const getTodos = (token) => axios.get(`${API_URL}/todos`, {
    headers: { Authorization: `Bearer ${token}` }
});

export const editTodo = (id, todo, token) => {
    return axios.put(`${API_URL}/todos/${id}`, todo, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const deleteTodo = (id, token) => {
    return axios.delete(`${API_URL}/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
