import axios from 'axios';

const kUrl = 'http://localhost:8000';


export function getPersonList(){

    return axios.get(kUrl + "/api/person");
}

export function getPersonCount(){
    return axios.get(kUrl + "/api/persondetail/count");
}


export function getPersonHireList(){

    return axios.get(kUrl + "/api/person/hire");
}

export function getPersonFireList(){

    return axios.get(kUrl + "/api/person/fire");
}
