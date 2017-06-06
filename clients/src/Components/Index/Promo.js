import React, {Component, PropTypes} from 'react';

class Promo extends Component{

    render(){

        return(
            <div className="promo-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo">
                                <i className="fa fa-refresh"></i>
                                <p>매일 매일 새로운 제품</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo">
                                <i className="fa fa-truck"></i>
                                <p>신선한 제품 즉시 배송</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo">
                                <i className="fa fa-lock"></i>
                                <p>안전하고 믿을 수 있는</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo">
                                <i className="fa fa-gift"></i>
                                <p>정말 좋은 제품!!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Promo;
