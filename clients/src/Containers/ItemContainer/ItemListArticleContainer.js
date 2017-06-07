import React, {Component} from 'react';


import ItemListContainer from './ItemListContainer';
import {Nav, ProductTitle, Footer} from '../../Components';


class ItemListArticleContainer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Nav />
                <div>
                    <ProductTitle
                        title={"상품 목록"}
                    />
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <ItemListContainer />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ItemListArticleContainer;
