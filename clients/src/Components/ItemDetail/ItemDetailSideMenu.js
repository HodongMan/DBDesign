import React, {Component, PropTypes} from 'react';


class ItemDetailSideMenu extends Component{

    render(){
        return(

                <div className="single-sidebar">
                    <h2 className="sidebar-title">Search Products</h2>
                    <form action="">
                        <input type="text" placeholder="Search products..."
                            onChange={
                                (e)=>{
                                    this.props.change(e.target.value);
                                    e.preventDefault();
                                }
                            }
                            onKeyPress={
                                (e)=>{
                                    if(e.key==="Enter"){
                                        this.props.click();
                                        e.preventDefault();
                                    }
                                }
                            }
                            />
                        <input type="submit" value="Search" onClick={
                            (e)=>{
                                this.props.change();
                                e.preventDefault();
                            }
                        }/>
                    </form>
                </div>
        );
    }
}

export default ItemDetailSideMenu;
