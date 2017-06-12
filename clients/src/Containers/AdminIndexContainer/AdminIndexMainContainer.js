import React, {Component} from 'react';
import { AdminSidebar, AdminIndex} from '../../Components';

//import { getCartList } from '../../lib/cartToServer';


class AdminIndexMainContainer extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }


    render(){
        return(
            <div className='wrapper'>
                <AdminSidebar />
                <AdminIndex />
            </div>
        );
    }
}

export default AdminIndexMainContainer;
