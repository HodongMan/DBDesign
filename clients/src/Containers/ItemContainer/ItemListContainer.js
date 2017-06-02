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
            console.log(this.state.itemList[0].id);
        })
        .catch((error) => console.log(error));
    }

    render(){
        return(
            <div className='row'>
                {this.state.itemList.map((item) => {
                    return(<Item
                            key={item.id}
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
