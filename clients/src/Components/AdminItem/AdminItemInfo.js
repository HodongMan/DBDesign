import React, {Component} from 'react'

class ItemInfo extends Component{

    render(){
        return(
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.type}</td>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.stock}</td>
                <td></td>
            </tr>
        );
    }
}

export default ItemInfo;
