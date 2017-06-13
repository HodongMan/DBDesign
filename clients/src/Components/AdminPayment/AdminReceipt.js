import React, {Component} from 'react'


class ReceiptInfo extends Component{

    render(){

        return(

            <div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">

    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Modal Header</h4>
      </div>
      <div className="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
            /*
            <div id="myModal" className="modal fade" role="dialog">
                <div className="container modal-dialog">
                    <div className="row modal-content">
                        <div className="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <address>
                                        <strong>Elf Cafe</strong>
                                        <br/>
                                        2135 Sunset Blvd
                                        <br/>
                                        Los Angeles, CA 90026
                                        <br/>
                                        <abbr title="Phone">P:</abbr> (213) 484-6829
                                    </address>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                                    <p>
                                        <em>Date: 1st November, 2013</em>
                                    </p>
                                    <p>
                                        <em>Receipt #: 34522677W</em>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="text-center">
                                    <h1>Receipt</h1>
                                </div>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>#</th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="col-md-9"><h4><em>Baked Rodopa Sheep Feta</em></h4></td>
                                            <td className="col-md-1"> 2 </td>
                                            <td className="col-md-1 text-center">$13</td>
                                            <td className="col-md-1 text-center">$26</td>
                                        </tr>
                                        <tr>
                                            <td className="col-md-9"><h4><em>Lebanese Cabbage Salad</em></h4></td>
                                            <td className="col-md-1"> 1 </td>
                                            <td className="col-md-1 text-center">$8</td>
                                            <td className="col-md-1 text-center">$8</td>
                                        </tr>
                                        <tr>
                                            <td className="col-md-9"><h4><em>Baked Tart with Thyme and Garlic</em></h4></td>
                                            <td className="col-md-1"> 3 </td>
                                            <td className="col-md-1 text-center">$16</td>
                                            <td className="col-md-1 text-center">$48</td>
                                        </tr>
                                        <tr>
                                            <td>   </td>
                                            <td>   </td>
                                            <td className="text-right">
                                                <p>
                                                    <strong>Subtotal: </strong>
                                                </p>
                                                <p>
                                                    <strong>Tax: </strong>
                                                </p>
                                            </td>
                                            <td className="text-center">
                                            <p>
                                                <strong>$6.94</strong>
                                            </p>
                                            <p>
                                                <strong>$6.94</strong>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>   </td>
                                        <td>   </td>
                                        <td className="text-right"><h4><strong>Total: </strong></h4></td>
                                        <td className="text-center text-danger"><h4><strong>$31.53</strong></h4></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        */
        );
    }
}

/*


    <div className="container modal fade" id='myModal' role='dialog'>
        <div className="row">
            <div className="well col-xs-10 col-sm-10 col-md-6 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <address>
                            <strong>Elf Cafe</strong>
                            <br/>
                            2135 Sunset Blvd
                            <br/>
                            Los Angeles, CA 90026
                            <br/>
                            <abbr title="Phone">P:</abbr> (213) 484-6829
                        </address>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 text-right">
                        <p>
                            <em>Date: 1st November, 2013</em>
                        </p>
                        <p>
                            <em>Receipt #: 34522677W</em>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="text-center">
                        <h1>Receipt</h1>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>#</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col-md-9"><h4><em>Baked Rodopa Sheep Feta</em></h4></td>
                                <td className="col-md-1"> 2 </td>
                                <td className="col-md-1 text-center">$13</td>
                                <td className="col-md-1 text-center">$26</td>
                            </tr>
                            <tr>
                                <td className="col-md-9"><h4><em>Lebanese Cabbage Salad</em></h4></td>
                                <td className="col-md-1"> 1 </td>
                                <td className="col-md-1 text-center">$8</td>
                                <td className="col-md-1 text-center">$8</td>
                            </tr>
                            <tr>
                                <td className="col-md-9"><h4><em>Baked Tart with Thyme and Garlic</em></h4></td>
                                <td className="col-md-1"> 3 </td>
                                <td className="col-md-1 text-center">$16</td>
                                <td className="col-md-1 text-center">$48</td>
                            </tr>
                            <tr>
                                <td>   </td>
                                <td>   </td>
                                <td className="text-right">
                                    <p>
                                        <strong>Subtotal: </strong>
                                    </p>
                                    <p>
                                        <strong>Tax: </strong>
                                    </p>
                                </td>
                                <td className="text-center">
                                <p>
                                    <strong>$6.94</strong>
                                </p>
                                <p>
                                    <strong>$6.94</strong>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>   </td>
                            <td>   </td>
                            <td className="text-right"><h4><strong>Total: </strong></h4></td>
                            <td className="text-center text-danger"><h4><strong>$31.53</strong></h4></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

*/

export default ReceiptInfo;
