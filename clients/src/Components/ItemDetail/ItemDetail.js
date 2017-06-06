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


                        
                    </div>
                </div>

        );
    }
}

export default ItemDetail;
