import axios from 'axios';

const kUrl = 'http://localhost:8000';

export function getItemList(){

    return axios.get(kUrl + '/api/item/itemdetail');
}

export function getItemDetail(id){
    return axios.get(kUrl + "/api/itemdetail/" + id);
}


export function getItemDetailSearchResult(search){
    return axios.get(kUrl + "/api/itemdetail/search/" + search);
}
