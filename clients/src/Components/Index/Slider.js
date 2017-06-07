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
                                                        <h2>UOS 25 할인 행사입니다</h2>
                                                        <p>UOS 25는 항상 여러분들을 위하고 있습니다 다양한 할인 행사 <br/>지금 만나볼 수 있습니다!!</p>
                                                        <p>손님 1 : 아니 이렇게 퍼주면 도대체 뭐남아요<br />UOS25 : 남는거 읍서.. ㅎㅎㅎ 사람 남으면 됐지 뭐</p>
                                                        <a href="" className="readmore">더 보기</a>
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
                                                        <h2>UOS 25 할인 행사입니다</h2>
                                                        <p>UOS 25는 항상 여러분들을 위하고 있습니다 다양한 할인 행사 <br/>지금 만나볼 수 있습니다!!</p>
                                                        <p>손님 1 : 아니 이렇게 퍼주면 도대체 뭐남아요<br />UOS25 : 남는거 읍서.. ㅎㅎㅎ 사람 남으면 됐지 뭐</p>
                                                        <a href="" className="readmore">더 보기</a>
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
                                                        <h2>UOS 25 할인 행사입니다</h2>
                                                        <p>UOS 25는 항상 여러분들을 위하고 있습니다 다양한 할인 행사 <br/>지금 만나볼 수 있습니다!!</p>
                                                        <p>손님 1 : 아니 이렇게 퍼주면 도대체 뭐남아요<br />UOS25 : 남는거 읍서.. ㅎㅎㅎ 사람 남으면 됐지 뭐</p>
                                                        <a href="" className="readmore">더 보기</a>
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
