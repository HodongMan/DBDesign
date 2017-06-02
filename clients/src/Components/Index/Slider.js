import React, {Component, PropTypes} from 'react';

class Slider extends Component{

    render(){

        return(
            <div className="slider-area">
                <div className="zigzag-bottom"></div>
                <div id="slide-list" className="carousel carousel-fade slide" data-ride="carousel">

                    <div className="slide-bulletz">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <ol className="carousel-indicators slide-indicators">
                                        <li data-target="#slide-list" data-slide-to="0" className="active"></li>
                                        <li data-target="#slide-list" data-slide-to="1"></li>
                                        <li data-target="#slide-list" data-slide-to="2"></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <div className="single-slide">
                                <div className="slide-bg slide-one"></div>
                                <div className="slide-text-wrapper">
                                    <div className="slide-text">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6 col-md-offset-6">
                                                    <div className="slide-content">
                                                        <h2>We are awesome</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, dolorem, excepturi. Dolore aliquam quibusdam ut quae iure vero exercitationem ratione!</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ab molestiae minus reiciendis! Pariatur ab rerum, sapiente ex nostrum laudantium.</p>
                                                        <a href="" className="readmore">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-slide">
                                <div className="slide-bg slide-two"></div>
                                <div className="slide-text-wrapper">
                                    <div className="slide-text">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6 col-md-offset-6">
                                                    <div className="slide-content">
                                                        <h2>We are great</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aspernatur, dolorum harum molestias tempora deserunt voluptas possimus quos eveniet, vitae voluptatem accusantium atque deleniti inventore. Enim quam placeat expedita! Quibusdam!</p>
                                                        <a href="" className="readmore">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="single-slide">
                                <div className="slide-bg slide-three"></div>
                                <div className="slide-text-wrapper">
                                    <div className="slide-text">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-6 col-md-offset-6">
                                                    <div className="slide-content">
                                                        <h2>We are superb</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, eius?</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptates necessitatibus dicta recusandae quae amet nobis sapiente explicabo voluptatibus rerum nihil quas saepe, tempore error odio quam obcaecati suscipit sequi.</p>
                                                        <a href="" className="readmore">Learn more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;
