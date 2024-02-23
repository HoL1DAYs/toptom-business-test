
import axios from 'axios';

const API_BASE_URL = 'https://qqfnjewfbgdqnkqncqefberqlfjnjqefnqervnklqfewf.toptom.kz';

export default {
    register(user: any) {
        return axios.post(`${API_BASE_URL}/registration`, user, {mode: 'no-cors'});
    },
    login(user: any) {
        return axios.post(`${API_BASE_URL}/login`, user);
    },
    logout() {
        return axios.post(`${API_BASE_URL}/logout`);
    },
    getFavorites() {
        return axios.get(`${API_BASE_URL}/favorites`);
    },
    addToFavorites(productId: any) {
        return axios.post(`${API_BASE_URL}/favorites/add`, { product_id: productId });
    },
    removeFromFavorites(productId: any) {
        return axios.delete(`${API_BASE_URL}/favorites/remove`, { data: { product_id: productId } });
    },
    getAllProducts() {
        return axios.get(`${API_BASE_URL}/products`);
    }
};
