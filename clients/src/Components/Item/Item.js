import React, {Component, PropTypes} from 'react';
class Item extends Component{

    render(){

        return(

            <div className='col-sm-4 col-lg-4 col-md-4'>
                <div className='thumbnail'>
                    <img src={this.props.image} alt='' />
                    <div className='caption'>
                        <h4 className='pull-right'>{this.props.price} 원</h4>
                        <h4><a href='#'>{this.props.name}</a></h4>
                        <p>{this.props.content}.</p>
                    </div>
                    <div className='ratings'>
                        <p className='pull-right'>{this.props.stock} 개 남음</p>
                        <p>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                            <span className="glyphicon glyphicon-star"></span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

/*
Item.propTypes = {
    id : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    content : PropTypes.string.isRequired,
    price : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    item_id : PropTypes.string.isRequired,
    stock : PropTypes.string.isRequired,
}
*/

export default Item;
