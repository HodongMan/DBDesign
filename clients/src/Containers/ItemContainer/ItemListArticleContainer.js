import React, {Component} from 'react';

import ItemListContainer from './ItemListContainer';
import {ItemAD} from '../../Components';


class ItemListArticleContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <ItemAD />
                        <ItemListContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemListArticleContainer;
