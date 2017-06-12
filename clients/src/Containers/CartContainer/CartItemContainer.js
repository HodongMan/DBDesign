import React, {Component} from 'react';
import { Nav, ProductTitle, CartItem, Footer } from '../../Components';
import ItemSideMenuContainer from '../ItemDetailContainer/ItemSideMenuContainer';

import { getCartList } from '../../lib/cartToServer';


class CartItemContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
        }
    }

    componentDidMount(){
        this.initialCartState();
    }

    initialCartState(){

        let email = "Temp";
        getCartList(email)
        .then((result) => {
            this.setState({
                data : result.data,
            })
        })
        .catch((error) => console.log(error));
    }

    cancelToCart(){


    }

    render(){
        return(
            <div>
                <Nav />
                <ProductTitle
                    title={"결재"}
                />
                <div className='container'>
                    <div className='row'>
                        <ItemSideMenuContainer />

                            <div className="col-md-8">
                                <div className="product-content-right">
                                    <div className="woocommerce">
                                        <form method="post" action="#">
                                            <table cellSpacing="0" className="shop_table cart">
                                                <thead>
                                                    <tr>
                                                        <th className="product-remove">&nbsp;</th>
                                                        <th className="product-thumbnail">&nbsp;</th>
                                                        <th className="product-name">Product</th>
                                                        <th className="product-price">Price</th>
                                                        <th className="product-quantity">Quantity</th>
                                                        <th className="product-subtotal">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    this.state.data.map((item) => {
                                                        return( <CartItem
                                                            key={item.item_id}
                                                            id={item.item_id}
                                                            name={item.name}
                                                            image={item.image}
                                                            price={item.price}
                                                            count{item.count}
                                                        />
                                                        );
                                                    };
                                                    <tr>
                                                        <td className="actions" colSpan="6">
                                                            <div className="coupon">
                                                                <label htmlFor="coupon_code"></label>
                                                                <input type="text" placeholder="쿠폰 코드" value="" id="coupon_code" className="input-text" name="coupon_code" />
                                                                <input type="submit" value="쿠폰 적용하기" name="apply_coupon" className="button" />
                                                            </div>
                                                            <input type="submit" value="계산 하기" name="update_cart" className="button" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>

                                        <div className="cart-collaterals">


                                        <div className="cart_totals ">
                                            <h2>총 금액</h2>

                                            <table cellSpacing="0">
                                                <tbody>
                                                    <tr className="cart-subtotal">
                                                        <th>가격</th>
                                                        <td><span className="amount">15000 원</span></td>
                                                    </tr>

                                                    <tr className="shipping">
                                                        <th>할인된 금액</th>
                                                        <td>그딴거 업슴</td>
                                                    </tr>

                                                    <tr className="order-total">
                                                        <th>결제 금액</th>
                                                        <td><strong><span className="amount">15000 원</span></strong> </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default CartItemContainer;
