import React, {Component} from 'react';
import {Item} from '../../Components';
import {getItemList} from '../../lib/itemToServer';

class ItemListContainer extends Component{

    constructor(){
        super();
        this.state = {
            itemList : [],
        };
    }

    componentDidMount(){
        getItemList()
        .then((result) => {
            this.setState({itemList : result.data});
        })
        .catch((error) => console.log(error));
    }

    render(){
        return(
            <div className='row'>
                {this.state.itemList.map((item) => {
                    return(<Item
                            key={item.item_id}
                            id={item.item_id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            content={item.content}
                            stock={item.stock}
                        />
                    );
                })}
            </div>
        );
    }
}

export default ItemListContainer;
