import React, {Component} from 'react';

import ItemListContainer from './ItemListContainer';
import {ProductTitle} from '../../Components';


class ItemListArticleContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <ProductTitle />
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <ItemListContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemListArticleContainer;
