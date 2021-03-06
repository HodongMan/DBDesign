import React, {Component} from 'react';
import { Nav, ProductTitle, CartItem, Footer } from '../../Components';
import ItemSideMenuContainer from '../ItemDetailContainer/ItemSideMenuContainer';

import { getCartList, deleteCartList } from '../../lib/cartToServer';
import { setPayment } from '../../lib/paymentToServer';
import { addToBalance } from '../../lib/balanceToServer';

class CartMainContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
            totalCount : 0,
        }

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    componentDidMount(){
        this.initialCartState();
    }

    initialCartState(){

        let email = "Temp";
        getCartList(email)
        .then((result) => {

            let totalCount = 0;
            result.data.forEach((item, index) => {
                totalCount += item.count * item.price;
            });

            this.setState({
                data : result.data,
                totalCount,
            });

        })
        .catch((error) => console.log(error));
    }

    handleOnSubmit(event){

        let resultText = '';
        this.state.data.forEach((item, index) => {
            let itemText = item.name + "," + item.count + ";";
            resultText += itemText;
        })

        let saveData = {
            price : this.state.totalCount,
            payment : this.state.totalCount,
            content : resultText,
            chance : "카드",
            date : "2017-06-14 14:02:58",
            person_email : "Temp",
        };


        setPayment(saveData)
        .then((result) => {
            deleteCartList("Temp")
            .then((result) => {
                this.setState({
                    data : [],
                    totalCount : 0,
                });
                addToBalance({
                    type : saveData.chance,
                    money : saveData.payment
                }).
                then((result) => console.log(result))
                .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));

        event.preventDefault();
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
                                                    {this.state.data.map((item) => {
                                                        return( <CartItem
                                                            key={item.item_id}
                                                            id={item.item_id}
                                                            name={item.name}
                                                            image={item.image}
                                                            price={item.price}
                                                            count={item.count}
                                                            />
                                                        );
                                                    })}
                                                    <tr>
                                                        <td className="actions" colSpan="6">
                                                            <div className="coupon">
                                                                <label htmlFor="coupon_code"></label>
                                                                <input type="text" placeholder="쿠폰 코드" value="" id="coupon_code" className="input-text" name="coupon_code" />
                                                                <input type="submit" value="쿠폰 적용하기" name="apply_coupon" className="button" />
                                                            </div>
                                                            <input type="submit" value="계산 하기" name="update_cart" className="button" onClick={this.handleOnSubmit}/>
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
                                                        <td><span className="amount">{this.state.totalCount} 원</span></td>
                                                    </tr>

                                                    <tr className="shipping">
                                                        <th>할인된 금액</th>
                                                        <td>그딴거 업슴</td>
                                                    </tr>

                                                    <tr className="order-total">
                                                        <th>결제 금액</th>
                                                        <td><strong><span className="amount">{this.state.totalCount} 원</span></strong> </td>
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

export default CartMainContainer;
