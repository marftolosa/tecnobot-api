import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users';

export const getUsers = () => axios.get(API_URL);
export const createUser = (user) => axios.post(API_URL, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id) => {
    return axios.delete(`http://localhost:3000/api/users/${id}`);
};
  
