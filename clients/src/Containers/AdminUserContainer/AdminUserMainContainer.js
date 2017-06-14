import React, {Component} from 'react';
import { AdminSidebar, AdminUser} from '../../Components';

import { getPersonList, getPersonHireList, getPersonFireList, makePersonHire, makePersonFire } from '../../lib/personToServer';


class AdminUserMainContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            hire : [],
            fire : [],
        }

        this.handleClickHire = this.handleClickHire.bind(this);
        this.handleClickFire = this.handleClickFire.bind(this);
    }

    componentDidMount(){

        this.initialUserState();
    }

    initialUserState(){

        getPersonHireList()
        .then((user) => {
            this.setState({
                hire : user.data,
            });

        })
        .catch((error) => console.log(error));

        getPersonFireList()
        .then((user) => {
            this.setState({
                fire : user.data,
            });

        })
        .catch((error) => console.log(error));
    }

    handleClickHire(event, email){

        makePersonHire(email)
        .then()
        .catch((error) => console.log(error));
        event.preventDefault();
    }

    handleClickFire(event, email){

        makePersonFire(email)
        .then()
        .catch((error) => console.log(error));
        event.preventDefault();
    }


    render(){
        return(
            <div className='wrapper'>
                <AdminSidebar/>
                <AdminUser
                    data={this.state.hire}
                    fire={this.state.fire}
                    handleClickHire={this.handleClickHire}
                    handleClickFire={this.handleClickFire}
                />
            </div>
        );
    }
}

export default AdminUserMainContainer;
