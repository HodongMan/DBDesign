import React, {Component} from 'react';


class AdminIndex extends Component{

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
                                <a className="navbar-brand" href="#">Dashboard</a>
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
                                <div className="col-lg-3 col-sm-6">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-xs-5">
                                                    <div className="icon-big icon-warning text-center">
                                                        <i className="ti-server"></i>
                                                    </div>
                                                </div>
                                                <div className="col-xs-7">
                                                    <div className="numbers">
                                                        <p>거래횟수</p>
                                                        {this.props.count}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <hr />
                                                <div className="stats">
                                                    <i className="ti-reload"></i> Updated now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-xs-5">
                                                    <div className="icon-big icon-success text-center">
                                                        <i className="ti-wallet"></i>
                                                    </div>
                                                </div>
                                                <div className="col-xs-7">
                                                    <div className="numbers">
                                                        <p>현재 매출</p>
                                                        {this.props.money}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <hr />
                                                <div className="stats">
                                                    <i className="ti-calendar"></i> Last day
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-xs-5">
                                                    <div className="icon-big icon-danger text-center">
                                                        <i className="ti-pulse"></i>
                                                    </div>
                                                </div>
                                                <div className="col-xs-7">
                                                    <div className="numbers">
                                                        <p>직원 수</p>
                                                        {this.props.personcount}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <hr />
                                                <div className="stats">
                                                    <i className="ti-timer"></i> In the last hour
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="card">
                                        <div className="content">
                                            <div className="row">
                                                <div className="col-xs-5">
                                                    <div className="icon-big icon-info text-center">
                                                        <i className="ti-twitter-alt"></i>
                                                    </div>
                                                </div>
                                                <div className="col-xs-7">
                                                    <div className="numbers">
                                                        <p>제품 종류</p>
                                                        {this.props.itemcount}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer">
                                                <hr />
                                                <div className="stats">
                                                    <i className="ti-reload"></i> Updated now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Users Behavior</h4>
                                            <p className="category">24 Hours performance</p>
                                        </div>
                                        <div className="content">
                                            <div id="chartHours" className="ct-chart"></div>
                                            <div className="footer">
                                                <div className="chart-legend">
                                                    <i className="fa fa-circle text-info"></i> Open
                                                    <i className="fa fa-circle text-danger"></i> Click
                                                    <i className="fa fa-circle text-warning"></i> Click Second Time
                                                </div>
                                                <hr />
                                                <div className="stats">
                                                    <i className="ti-reload"></i> Updated 3 minutes ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="header">
                                            <h4 className="title">Email Statistics</h4>
                                            <p className="category">Last Campaign Performance</p>
                                        </div>
                                        <div className="content">
                                            <div id="chartPreferences" className="ct-chart ct-perfect-fourth"></div>

                                            <div className="footer">
                                                <div className="chart-legend">
                                                    <i className="fa fa-circle text-info"></i> Open
                                                    <i className="fa fa-circle text-danger"></i> Bounce
                                                    <i className="fa fa-circle text-warning"></i> Unsubscribe
                                                </div>
                                                <hr />
                                                <div className="stats">
                                                    <i className="ti-timer"></i> Campaign sent 2 days ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card ">
                                        <div className="header">
                                            <h4 className="title">2015 Sales</h4>
                                            <p className="category">All products including Taxes</p>
                                        </div>
                                        <div className="content">
                                            <div id="chartActivity" className="ct-chart"></div>

                                            <div className="footer">
                                                <div className="chart-legend">
                                                    <i className="fa fa-circle text-info"></i> Tesla Model S
                                                    <i className="fa fa-circle text-warning"></i> BMW 5 Series
                                                </div>
                                                <hr />
                                                <div className="stats">
                                                    <i className="ti-check"></i> Data information certified
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <footer className="footer">
                        <div className="container-fluid">
                            <nav className="pull-left">
                                <ul>

                                    <li>
                                        <a href="http://www.creative-tim.com">
                                            Creative Tim
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://blog.creative-tim.com">
                                           Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.creative-tim.com/license">
                                            Licenses
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="copyright pull-right">
                            </div>
                        </div>
                    </footer>

                </div>
        );
    }
}

export default AdminIndex;
