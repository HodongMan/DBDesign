import React, {Component} from 'react';
import { Nav, ItemDetailSideMenu, ProductTitle, Footer } from '../../Components';
import ItemDetailContainer from './ItemDetailContainer';

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
                        <ItemDetailSideMenu />
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
