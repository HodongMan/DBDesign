import React, {Component} from 'react';

import UserInfo from './AdminUserInfo';
import '../AdminIndex/Admin.css';

class AdminUser extends Component{


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
                           <a className="navbar-brand" href="#">직원 리스트</a>
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
                                       <h4 className="title">현 직원</h4>
                                       <p className="category">현재 근무하고 있는 직원 명단입니다.</p>
                                   </div>
                                   <div className="content table-responsive table-full-width">
                                       <table className="table table-striped">
                                           <thead>
                                               <tr>
                                                   <th>순번</th>
                                                   <th>이름</th>
                                                   <th>급여</th>
                                                   <th>전화번호</th>
                                                   <th>입사일</th>
                                                   <th>바꾸기</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                               {this.props.data.map((user, index) => {
                                                   return( <UserInfo
                                                       key={user.person_email}
                                                       index={index+1}
                                                       name={user.name}
                                                       salary={user.salary}
                                                       phone={user.phone}
                                                       date={user.date}
                                                       clickFunc={this.props.handleClicFHire}
                                                       />
                                                   );
                                               })}
                                           </tbody>
                                       </table>

                                   </div>
                               </div>
                           </div>


                           <div className="col-md-12">
                               <div className="card card-plain">
                                   <div className="header">
                                       <h4 className="title">퇴사 직원</h4>
                                       <p className="category">퇴사한 직원의 명단입니다.</p>
                                   </div>
                                   <div className="content table-responsive table-full-width">
                                       <table className="table table-hover">
                                           <thead>
                                               <tr>
                                                   <th>순번</th>
                                                   <th>이름</th>
                                                   <th>급여</th>
                                                   <th>전화번호</th>
                                                   <th>퇴사일</th>
                                                   <th>바꾸기</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                               {this.props.fire.map((user, index) => {
                                                   return( <UserInfo
                                                       key={user.person_email}
                                                       index={index+1}
                                                       name={user.name}
                                                       salary={user.salary}
                                                       phone={user.phone}
                                                       date={user.date}
                                                       clickFunc={this.props.handleClickHire}
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

export default AdminUser;
