import React, {Component} from 'react';
import { AdminSidebar, AdminUser} from '../../Components';

import { getPersonList } from '../../lib/personToServer';


class AdminUserMainContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : [],
        }
    }

    componentDidMount(){

        this.initialUserState();
    }

    initialUserState(){

        getPersonList()
        .then((user) => {
            this.setState({
                data : user.data,
            });

        })
        .catch((error) => console.log(error));
    }


    render(){
        return(
            <div className='wrapper'>
                <AdminSidebar/>
                <AdminUser data={this.state.data}/>
            </div>
        );
    }
}

export default AdminUserMainContainer;
