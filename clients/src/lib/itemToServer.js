import axios from 'axios';

export function getItemList(){

    axios.get("http://localhost:8000/api/item/itemdetail")
    .then((response) => {return response})
    .catch((error) => {return error});
}
