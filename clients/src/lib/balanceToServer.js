import axios from 'axios';

const kUrl = 'http://localhost:8000';


export function getBalance(){
    return axios.get(kUrl + "/api/balance");
};

export function getBalanceMoney(){
    return axios.get(kUrl + "/api/balance/money");
}

export function getBalanceCount(){
    return axios.get(kUrl + "/api/balance/count");
}

export function addToBalance(data){
    return axios.post(kUrl + "/api/balance", data);
}
