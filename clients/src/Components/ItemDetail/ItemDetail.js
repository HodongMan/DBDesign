import React, {Component, PropTypes} from 'react';


class ItemDetail extends Component{

    render(){

        return(

            <div className="col-md-8">
                    <div className="product-content-right">
                        <div className="product-breadcroumb">
                            <a href="">Home</a>
                            <a href="">Category Name</a>
                            <a href="">Sony Smart TV - 2015</a>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="product-images">
                                    <div className="product-main-img">
                                        <img src={this.props.image} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="product-inner">
                                    <h2 className="product-name">{this.props.name}</h2>
                                    <div className="product-inner-price">
                                        <ins>{this.props.price}원</ins> <del>$800.00</del>
                                    </div>

                                    <form action="" className="cart">
                                        <div className="quantity">
                                            <input type="number" size="4" className="input-text qty text" title="Qty" value="1" name="quantity" min="1" step="1" />
                                        </div>
                                        <button className="add_to_cart_button" type="submit">구매하기</button>
                                    </form>

                                    <div className="product-inner-category">
                                        <p>Category: <a href="">Summer</a>. Tags: <a href="">awesome</a>, <a href="">best</a>, <a href="">sale</a>, <a href="">shoes</a>. </p>
                                    </div>

                                    <div role="tabpanel">
                                        <ul className="product-tab" role="tablist">
                                            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">제품 설명</a></li>
                                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">후기</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div role="tabpanel" className="tab-pane fade in active" id="home">
                                                <h2>제품 설명</h2>
                                                <p>
                                                    {this.props.content}
                                                </p>
                                                </div>
                                            <div role="tabpanel" className="tab-pane fade" id="profile">
                                                <h2>Reviews</h2>
                                                <div className="submit-review">
                                                    <p><label htmlFor="name">Name</label> <input name="name" type="text" /></p>
                                                    <p><label htmlFor="email">Email</label> <input name="email" type="email" /></p>
                                                    <div className="rating-chooser">
                                                        <p>Your rating</p>

                                                        <div className="rating-wrap-post">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p><label htmlFor="review">Your review</label> <textarea name="review" id="" cols="30" rows="10"></textarea></p>
                                                    <p><input type="submit" value="Submit" /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="related-products-wrapper">
                            <h2 className="related-products-title">Related Products</h2>
                            <div className="related-products-carousel">
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-1.jpg" alt="" />
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Sony Smart TV - 2015</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$700.00</ins> <del>$800.00</del>
                                    </div>
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-2.jpg" alt="" />
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Apple new mac book 2015 March :P</a></h2>
                                    <div className="product-carousel-price">
                                        <ins>$899.00</ins> <del>$999.00</del>
                                    </div>
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-3.jpg" alt="" />
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Apple new i phone 6</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$400.00</ins> <del>$425.00</del>
                                    </div>
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-4.jpg" alt="" />
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Sony playstation microsoft</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$200.00</ins> <del>$225.00</del>
                                    </div>
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-5.jpg" alt="" />
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Sony Smart Air Condtion</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$1200.00</ins> <del>$1355.00</del>
                                    </div>
                                </div>
                                <div className="single-product">
                                    <div className="product-f-image">
                                        <img src="img/product-6.jpg" alt="" />
                                        <div className="product-hover">
                                            <a href="" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    </div>

                                    <h2><a href="">Samsung gallaxy note 4</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$400.00</ins>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default ItemDetail;
