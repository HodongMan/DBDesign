import React, { Component } from 'react';
import { Nav, Footer,} from './Components'
import {ItemListArticleContainer} from './Containers';


class ItemList extends Component {
  render() {
    return (
        <div>
          <Nav />
          <ItemListArticleContainer/>
          <Footer />
        </div>
    );
  }
}

export default ItemList;
