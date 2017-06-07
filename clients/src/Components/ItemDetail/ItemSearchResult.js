import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ItemSearchResult extends Component{

    render(){
        let linkUrl = '/detail/' + this.props.id;

        return(
            <div>
                <div className="thubmnail-recent">

                    <h2><a href={linkUrl}>{this.props.name}</a></h2>
                    <div className="product-sidebar-price">
                        <ins>{this.props.price} 원</ins>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemSearchResult;

//<img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
