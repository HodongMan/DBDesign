import React, {Component} from 'react'
import ReceiptInfo from './AdminReceipt';


class PaymentInfo extends Component{

    render(){
        return(
                <tr>
                    <td>{this.props.index}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.chance}</td>
                    <td><button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">자세히보기</button></td>
                    <td>{this.props.date}</td>
                    <td>버튼</td>

                </tr>

        );
    }
}

export default PaymentInfo;
