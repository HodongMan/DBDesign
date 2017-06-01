import React, {Component} from 'react';

import ItemListArticleContainer from './ItemListArticleContainer';
import {ItemCategoryList} from '../../Components';

class ItemListMainContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className='container'>
                <div className='row'>
                    <ItemCategoryList />
                    <ItemListArticleContainer />
                </div>
            </div>
        );
    }
}

export default ItemListMainContainer;
