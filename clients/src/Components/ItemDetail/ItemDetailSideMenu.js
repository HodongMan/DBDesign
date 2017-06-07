import React, {Component, PropTypes} from 'react';


class ItemDetailSideMenu extends Component{

    render(){
        return(

                <div className="single-sidebar">
                    <h2 className="sidebar-title">상품 검색</h2>
                    <form action="">
                        <input type="text" placeholder="상품 이름..."
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
                        <button type="submit"onClick={
                            (e)=>{
                                this.props.click();
                                e.preventDefault();
                            }
                        }>검색</button>
                    </form>
                </div>
        );
    }
}

export default ItemDetailSideMenu;
