import React, {Component} from 'react';

import PaymentInfo from './AdminPaymentInfo';
import ReceiptInfo from './AdminReceipt';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');
require('bootstrap-datepicker');


class AdminItem extends Component{


    render(){

        return(
            <div className="main-panel">
               <nav className="navbar navbar-default">
                   <div className="container-fluid">
                       <div className="navbar-header">
                           <button type="button" className="navbar-toggle">
                               <span className="sr-only">Toggle navigation</span>
                               <span className="icon-bar bar1"></span>
                               <span className="icon-bar bar2"></span>
                               <span className="icon-bar bar3"></span>
                           </button>
                           <a className="navbar-brand" href="#">거래내역</a>
                       </div>
                       <div className="collapse navbar-collapse">
                           <ul className="nav navbar-nav navbar-right">
                               <li>
                                   <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                       <i className="ti-panel"></i>
                                       <p>Stats</p>
                                   </a>
                               </li>
                               <li className="dropdown">
                                     <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                           <i className="ti-bell"></i>
                                           <p className="notification">5</p>
                                           <p>Notifications</p>
                                           <b className="caret"></b>
                                     </a>
                                     <ul className="dropdown-menu">
                                       <li><a href="#">Notification 1</a></li>
                                       <li><a href="#">Notification 2</a></li>
                                       <li><a href="#">Notification 3</a></li>
                                       <li><a href="#">Notification 4</a></li>
                                       <li><a href="#">Another notification</a></li>
                                     </ul>
                               </li>
                               <li>
                                   <a href="#">
                                       <i className="ti-settings"></i>
                                       <p>Settings</p>
                                   </a>
                               </li>
                           </ul>

                       </div>
                   </div>
               </nav>


               <div className="content">
                   <div className="container-fluid">
                       <div className="row">
                           <div className="col-md-12">
                               <div className="card">
                                   <div className="header">
                                       <h4 className="title">거래 내역</h4>
                                       <p className="category">상품이 판매된 거래내역 입니다.(영수증)</p>
                                   </div>
                                   <div className="content table-responsive table-full-width">
                                       <table className="table table-striped">
                                           <thead>
                                               <tr>
                                                   <th>순번</th>
                                                   <th>금액</th>
                                                   <th>지불방법</th>
                                                   <th>내용</th>
                                                   <th>날짜</th>
                                                   <th>환불</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                               {this.props.data.map((payment, index) => {
                                                   return( <PaymentInfo
                                                       key={payment.id}
                                                       index={index+1}
                                                       price={payment.price}
                                                       chance={payment.chance}
                                                       content={payment.content}
                                                       date={payment.date}
                                                       />
                                                   );
                                               })}
                                           </tbody>
                                       </table>


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

export default AdminItem;
