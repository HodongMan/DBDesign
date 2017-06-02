import axios from 'axios';

const kUrl = 'http://localhost:8000';

export function getItemList(){

    return axios.get(kUrl + '/api/item/itemdetail')
}
