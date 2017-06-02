import React, {Component, PropTypes} from 'react';

class Brand extends Component{

    render(){

        return(
            <div className="brands-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="brand-wrapper">
                                <h2 className="section-title">Brands</h2>
                                <div className="brand-list">
                                    <img src="img/services_logo__1.jpg" alt="" />
                                    <img src="img/services_logo__2.jpg" alt="" />
                                    <img src="img/services_logo__3.jpg" alt="" />
                                    <img src="img/services_logo__4.jpg" alt="" />
                                    <img src="img/services_logo__1.jpg" alt="" />
                                    <img src="img/services_logo__2.jpg" alt="" />
                                    <img src="img/services_logo__3.jpg" alt="" />
                                    <img src="img/services_logo__4.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Brand;
