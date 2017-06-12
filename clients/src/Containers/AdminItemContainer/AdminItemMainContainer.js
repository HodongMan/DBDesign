import React, {Component} from 'react';
import { AdminSidebar, AdminItem} from '../../Components';

import { getItemListOrderByStock } from '../../lib/itemToServer';


class AdminItemMainContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
        }
    }

    componentDidMount(){
        this.initialItemOrderByStockState();
    }

    initialItemOrderByStockState(){
        getItemListOrderByStock()
        .then(result => {
            this.setState({
                data : result.data,
            });

            console.log(this.state.data[0]);
        })
        .catch(error => console.log(error))
    }


    render(){
        return(
            <div className='wrapper'>
                <AdminSidebar/>
                <AdminItem data={this.state.data}/>
            </div>
        );
    }
}

export default AdminItemMainContainer;
