import React, {Component, PropTypes} from 'react';

class ProductWidget extends Component{

    render(){

        return(
            <div className="product-widget-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-product-widget">
                                <h2 className="product-wid-title">많이 팔린 상품</h2>
                                <a href="" className="wid-view-more">자세히 보기</a>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                                    <h2><a href="single-product.html">삼성 스마트 TV - 2017</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>120만원</ins> <del></del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src="img/product-thumb-2.jpg" alt="" className="product-thumb" /></a>
                                    <h2><a href="single-product.html">아이폰 6</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>60만원</ins> <del></del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src="img/product-thumb-3.jpg" alt="" className="product-thumb" /></a>
                                    <h2><a href="single-product.html">imac 2017 Pro</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>225만원</ins> <del></del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-product-widget">
                                <h2 className="product-wid-title">최근 본 상품</h2>
                                <a href="#" className="wid-view-more">자세히 보기</a>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src="img/product-thumb-4.jpg" alt="" className="product-thumb" /></a>
                                    <h2><a href="single-product.html">플레이스테이션</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>40만원</ins> <del></del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                                    <h2><a href="single-product.html">스마트 공기청정기</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>25만원</ins> <del></del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src="img/product-thumb-2.jpg" alt="" className="product-thumb" /></a>
                                    <h2><a href="single-product.html">삼성 갤럭시 노트 4</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>68만원</ins> <del></del>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-product-widget">
                                <h2 className="product-wid-title">신 상품</h2>
                                <a href="#" className="wid-view-more">자세히 보기</a>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src="img/product-thumb-3.jpg" alt="" className="product-thumb" /></a>
                                    <h2><a href="single-product.html">애플 아이폰 6</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>110만원</ins> <del></del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src="img/product-thumb-4.jpg" alt="" className="product-thumb" /></a>
                                    <h2><a href="single-product.html">삼성 갤럭시 노트 4</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>72만원</ins> <del></del>
                                    </div>
                                </div>
                                <div className="single-wid-product">
                                    <a href="single-product.html"><img src="img/product-thumb-1.jpg" alt="" className="product-thumb" /></a>
                                    <h2><a href="single-product.html">플레이스테이션 4</a></h2>
                                    <div className="product-wid-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product-wid-price">
                                        <ins>88만원</ins> <del></del>
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

export default ProductWidget;
