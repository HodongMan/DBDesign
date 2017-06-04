import React, { Component } from 'react';
import { Nav, Slider, Promo, Brand, ProductWidget, MainContent, Footer,} from './Components'



class Index extends Component {
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

export default Index;
