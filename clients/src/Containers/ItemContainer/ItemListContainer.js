import React, {Component} from 'react';
import {Item} from '../../Components';
import {getItemList} from '../../lib/itemToServer';

class ItemListContainer extends Component{

    constructor(props){
        super(props);
        console.log(getItemList());
    }

    render(){
        return(
            <div className='row'>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        );
    }
}

export default ItemListContainer;
