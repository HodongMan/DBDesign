import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{

    render(){

        return(
            <div className>
                <div className="site-branding-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="logo">
                                    <h1><Link to='/'><span>UOS</span>25</Link></h1>
                                </div>
                            </div>

                            <div className="col-sm-6">
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mainmenu-area">
                    <div className="container">
                        <div className="row">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to='/'>홈</Link></li>
                                    <li><Link to='/list'>상품</Link></li>
                                    <li><Link to='/detail/1'>Detail</Link></li>
                                    <li><Link to='/cart'>결제</Link></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="#">Category</a></li>
                                    <li><a href="#">Others</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;
