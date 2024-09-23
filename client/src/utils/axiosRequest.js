import axios from '../axiosConfig';

export const request = {
    login: async ( email, password ) => {
        try {
            return await axios.post('auth/login', { email, password });
        } catch (error) {
            return;
        }
    },
    signup: async (username, email, password) => {
        try {
            return await axios.post('/auth/signup', { username, email, password });
        } catch (error) {
            return;
        }
    },
};