import React, {Component} from 'react';
import { ItemDetail } from '../../Components';
import { getItemDetail } from '../../lib/itemToServer';

class ItemDetailContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            id : 0,
            name : "",
            content : "",
            image : "",
            price : 0,
            item_id : 0,
            create_at : "",
            update_at : "",
        };
    }

    componentDidMount(){
        getItemDetail(this.props.id)
        .then((item) => {
            this.setState(item.data);
        })
        .catch((error) => console.log(error))
    }

    render(){
        return(
            <ItemDetail
                key={this.state.item_id}
                name={this.state.name}
                content={this.state.content}
                image={this.state.image}
                price={this.state.price}
                item_id={this.state.item_id}
            />
        );
    }
}

export default ItemDetailContainer;
