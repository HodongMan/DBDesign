import React, {Component} from 'react';
import {Item} from '../../Components';


class ItemListContainer extends Component{

    constructor(props){
        super(props);
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
