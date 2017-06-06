import React, {Component} from 'react';

class ItemSearchResult extends Component{

    render(){
        return(
            <div>
                <h2 className="sidebar-title">상품 목록</h2>
                <div className="thubmnail-recent">

                    <h2><a href="">{this.props.name}</a></h2>
                    <div className="product-sidebar-price">
                        <ins>{this.props.price}원</ins>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemSearchResult;

//<img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
