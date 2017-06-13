import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Admin.css';

class AdminSidebar extends Component{

    render(){
        return(
            <div className="sidebar" data-background-color="white" data-active-color="danger">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text">
                            UOS25 Admin
                        </a>
                    </div>

                    <ul className="nav">
                        <li className="active">
                            <Link to='/admin'>
                                <i className="ti-panel"></i>
                                <p>메인</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminuser">
                                <i className="ti-user"></i>
                                <p>직원 정보</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminitem">
                                <i className="ti-view-list-alt"></i>
                                <p>상품 정보</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/adminpayment">
                                <i className="ti-text"></i>
                                <p>판매 정보</p>
                            </Link>
                        </li>
                        <li>
                            <a href="icons.html">
                                <i className="ti-pencil-alt2"></i>
                                <p>매출 정보</p>
                            </a>
                        </li>
                        <li>
                            <a href="icons.html">
                                <i className="ti-pencil-alt2"></i>
                                <p>정산 정보</p>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

        );
    }
}

export default AdminSidebar;
