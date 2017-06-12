import React, {Component} from 'react'



class UserInfo extends Component{

    render(){
        return(
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.name}</td>
                <td>{this.props.salary}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.date}</td>
                <td></td>
            </tr>
        );
    }
}

export default UserInfo;
