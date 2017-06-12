import React, {Component} from 'react';
import { ItemDetail } from '../../Components';
import { getItemDetail } from '../../lib/itemToServer';
import { addToCart } from '../../lib/cartToServer';

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
            count : 1,
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);


    }

    componentDidMount(){
        getItemDetail(this.props.id)
        .then((item) => {
            this.setState(item.data);
        })
        .catch((error) => console.log(error))
    }

    handleOnSubmit(event){

        let sendData = {
            item_id : this.state.item_id,
            person_email : "Temp",
            count : this.state.count,
        };


        addToCart(sendData)
        .then((result) => console.log(result))
        .catch((error) => console.log(error));

        event.preventDefault();
    }

    handleOnChange(event){

        this.setState({
            count : parseInt(event.target.value)
        })
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
                handleOnChange={this.handleOnChange}
                handleOnSubmit={this.handleOnSubmit}
            />
        );
    }
}

export default ItemDetailContainer;
