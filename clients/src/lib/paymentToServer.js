import axios from 'axios';

const kUrl = 'http://localhost:8000';


export function getPaymentList(){

    return axios.get(kUrl + '/api/payment');
}

export function setPayment(data){

    return axios.post(kUrl + "/api/payment", data);
}
