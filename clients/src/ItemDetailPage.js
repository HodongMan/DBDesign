import React, { Component } from 'react';
import { Nav, ItemDetail, ItemDetailSideMenu, Footer,} from './Components'



class ItemDetailPage extends Component {
  render() {
    return (
        <div className='container'>
            <div className='row'>
              <Nav />
              <ItemDetailSideMenu />
              <ItemDetail />
              <Footer />
            </div>
        </div>
    );
  }
}

export default ItemDetailPage;
