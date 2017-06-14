import React, {Component} from 'react'
import ReceiptInfo from './AdminReceipt';


class PaymentInfo extends Component{

    render(){

        let newContentArray = this.props.content.split(";");
        let newContent = ""
        newContentArray.forEach((item, index) => {

            if(item === ""){
                return;
            }
            
            let ContentAndCount = item.split(",")

            newContent += ContentAndCount[0] + " " + ContentAndCount[1] + "개 |";
        });

        return(
                <tr>
                    <td>{this.props.index}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.chance}</td>
                    <td>{newContent}</td>
                    <td>{this.props.date}</td>
                    <td>버튼</td>

                </tr>

        );
    }
}

export default PaymentInfo;
