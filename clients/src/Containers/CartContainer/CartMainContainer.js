import React, {Component} from 'react';
import { Nav, ProductTitle, Cart, Footer } from '../../Components';

import ItemSideMenuContainer from '../ItemDetailContainer/ItemSideMenuContainer';

class CartMainContainer extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <Nav />
                <ProductTitle
                    title={"결재"}
                />
                <div className='container'>
                    <div className='row'>
                        <ItemSideMenuContainer />
                        <Cart />
                  </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default CartMainContainer;
