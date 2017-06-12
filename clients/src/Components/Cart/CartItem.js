import React, {Component} from 'react'

class CartItem extends Component{


    render(){

        let totalAmount = parseInt(this.props.count) * parseInt(this.props.price);
        return(
            <tr className="cart_item">
                <td className="product-remove">
                    <a title="Remove this item" className="remove" href="#">×</a>
                </td>

                <td className="product-thumbnail">
                    <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" className="shop_thumbnail" src={this.props.image} /></a>
                </td>

                <td className="product-name">
                    <a href="single-product.html">{this.props.name}</a>
                </td>

                <td className="product-price">
                    <span className="amount">{this.props.price} 원</span>
                </td>

                <td className="product-quantity">
                    <div className="quantity buttons_added">
                        {this.props.count}
                    </div>
                </td>

                <td className="product-subtotal">
                    <span className="amount">{totalAmount} 원</span>
                </td>
            </tr>
        );
    }
}

export default CartItem;
