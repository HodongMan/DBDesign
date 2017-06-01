import React, {Component} from 'react';

class ItemCategoryList extends Component{

    render(){

        return(
            <div className='col-md-3'>
                <p className='lead'>Shop Name</p>
                <div className='list-group'>
                    <a href='#' className='list-group-item'>물품 1</a>
                    <a href='#' className='list-group-item'>물품 2</a>
                    <a href='#' className='list-group-item'>물품 3</a>
                </div>
            </div>
        );
    }
}

export default ItemCategoryList;
