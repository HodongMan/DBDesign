import React, { Component } from 'react';
import { Nav, Slider, Promo, Brand, ProductWidget, MainContent, Footer,} from './Components'
import {ItemListArticleContainer} from './Containers';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import './style.css';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Slider />
        <Promo />
        <MainContent />
        <Brand />
        <ProductWidget />
        <Footer />
      </div>
    );
  }
}

export default App;
/*
<div>
  <Nav />
  <Slider />
  <Promo />
  <MainContent />
  <Brand />
  <ProductWidget />
  <Footer />
</div>


*/
