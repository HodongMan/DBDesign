import React, {Component} from 'react';
import { Nav, ProductTitle, Footer } from '../../Components';
import ItemDetailContainer from './ItemDetailContainer';
import ItemSideMenuContainer from './ItemSideMenuContainer';

class ItemDetailMainContainer extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <Nav />
                <ProductTitle />
                <div className='container'>
                    <div className='row'>
                        <ItemSideMenuContainer />
                        <ItemDetailContainer
                            id={this.props.match.params.id}
                        />
                  </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ItemDetailMainContainer;
