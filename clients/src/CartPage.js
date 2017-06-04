import React, { Component } from 'react';
import { Nav, ItemDetailSideMenu, Cart, Footer,} from './Components'



class CartPage extends Component {
  render() {
    return (
        <div>
            <Nav />
            <div className='single-product-area'>
                <div className='container'>
                    <div className='row'>
                      <ItemDetailSideMenu />
                      <Cart />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default CartPage;
