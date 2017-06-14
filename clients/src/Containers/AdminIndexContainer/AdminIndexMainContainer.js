import React, {Component} from 'react';
import { AdminSidebar, AdminIndex} from '../../Components';

import { getBalanceMoney, getBalanceCount } from '../../lib/balanceToServer';
import { getPersonCount } from '../../lib/personToServer';
import { getItemCount } from '../../lib/itemToServer';



class AdminIndexMainContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            money : "",
            count : 0,
            personcount : 0,
            itemcount : 0,
        };
    }

    componentDidMount(){

        getBalanceMoney()
        .then((result) => this.setState({
            money : result.data,
        }))
        .catch((error) => console.log(error));

        getBalanceCount()
        .then((result) => this.setState({
            count : result.data,
        }))
        .catch((error) => console.log(error));

        getPersonCount()
        .then((result) => this.setState({
            personcount : result.data,
        }))
        .catch(error => console.log(error));

        getItemCount()
        .then((result) => this.setState({
            itemcount : result.data,
        }))
        .catch(error => console.log(error));
    }


    render(){
        return(
            <div className='wrapper'>
                <AdminSidebar />
                <AdminIndex
                    money={this.state.money}
                    count={this.state.count}
                    personcount={this.state.personcount}
                    itemcount={this.state.itemcount}
                />
            </div>
        );
    }
}

export default AdminIndexMainContainer;
