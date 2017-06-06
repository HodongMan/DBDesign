import React, {Component} from 'react';
import { Nav, Slider, Brand, MainContent, ProductWidget, Promo, Footer } from '../../Components';

class IndexMainContainer extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
              <Nav />
              <Slider />
              <Promo />
              <ProductWidget />
              <Brand />
              <Footer />
            </div>
        );
    }
}

export default IndexMainContainer;
