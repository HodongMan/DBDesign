import React, {Component} from 'react';

import ItemListContainer from './ItemListContainer';
import {ItemAD} from '../../Components';


class ItemListHeaderContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='col-md-9'>
                <ItemAD />
                <ItemListContainer />
            </div>
        );
    }
}

export default ItemListHeaderContainer;
