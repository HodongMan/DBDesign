import React, {Component} from 'react';
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
                            <a href="dashboard.html">
                                <i className="ti-panel"></i>
                                <p>메인</p>
                            </a>
                        </li>
                        <li>
                            <a href="user.html">
                                <i className="ti-user"></i>
                                <p>직원 정보</p>
                            </a>
                        </li>
                        <li>
                            <a href="table.html">
                                <i className="ti-view-list-alt"></i>
                                <p>상품 정보</p>
                            </a>
                        </li>
                        <li>
                            <a href="typography.html">
                                <i className="ti-text"></i>
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
