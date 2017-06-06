import React, {Component} from 'react';
import { ItemDetailSideMenu, ItemSearchResult } from '../../Components';
import { getItemDetailSearchResult } from '../../lib/itemToServer';

class ItemSideMenuContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            searchText : "",
            searchResultData : [],
        };

        this.handleSearchOnChange = this.handleSearchOnChange.bind(this);
        this.handleSearchOnClick = this.handleSearchOnClick.bind(this);
    }

    componentDidMount(){

    }

    handleSearchOnChange(searchText){

        this.setState({
            searchText,
        });
    }

    handleSearchOnClick(){
        getItemDetailSearchResult(this.state.searchText)
        .then((result) => {
            this.setState({
                searchResultData : result.data,
            });
        })
        .catch((error) => console.log(error));
    }


    render(){
        return(
            <div className='col-md-4'>
                <ItemDetailSideMenu
                    click={this.handleSearchOnClick}
                    change={this.handleSearchOnChange}
                />
                <div className="single-sidebar">
                    {this.state.searchResultData.map((result) => {
                        return(<ItemSearchResult
                                key={result.item_id}
                                id={result.item_id}
                                name={result.name}
                                price={result.price}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ItemSideMenuContainer;
