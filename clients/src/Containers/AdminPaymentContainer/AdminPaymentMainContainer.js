import React, {Component} from 'react';
import { AdminSidebar, AdminPayment} from '../../Components';

import { getPaymentList } from '../../lib/paymentToServer';
import { getItemDetail } from '../../lib/itemToServer';

class AdminPaymentMainContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
        }
    }

    componentDidMount(){
        this.initialPaymentState();
        this.getPaymentListToItem('3,3;4,3;');
    }

    initialPaymentState(){

        getPaymentList()
        .then((result) => {
            this.setState({
                data : result.data,
            })
        })
        .catch((error) => console.log(error));
    }

    getPaymentListToItem(data){

        let itemPaymentList = []
        let itemList = data.split(";");
        itemList.forEach((item, index) => {
            if(item == ''){
                return;
            }
            let itemAndCount = item.split(",");
        })

        console.log(itemPaymentList);
    }


    render(){
        return(
            <div className='wrapper'>
                <AdminSidebar/>
                <AdminPayment data={this.state.data}/>
            </div>
        );
    }
}

export default AdminPaymentMainContainer;
