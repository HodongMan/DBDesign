import axios from 'axios';

const kUrl = 'http://localhost:8000';


export function addToCart(item){
    return axios.post(kUrl + '/api/cart', item);
}

export function getCartList(email){
    return axios.get(kUrl + '/api/cart/' + email);
}


export function deleteCartList(email){
    return axios.delete(kUrl + '/api/cart/' + email);
}
