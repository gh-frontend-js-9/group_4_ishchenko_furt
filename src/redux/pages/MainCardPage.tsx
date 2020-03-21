import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../components/Healpers/Loading";
import {getListPostsAction} from "../actions/getListPostsAction";
import './MainCardPage.scss'
import Slider from "react-slick";
import {MainCard} from "../components/MainCard/MainCard";

interface IProps {
    getListPostsAction?: any,
    isLoading?: boolean,
    listPosts?: any,
}

class MainCardPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
    };

    render() {

        let response = Object.values(this.props.listPosts)

        let renderSlides = response.map((slide: any)=>(
            <div className={'main-card-page'}>
                <MainCard {...slide} />
            </div>

        ))

        const settings = {
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        dots: false,
                        autoplay: true,
                        autoplaySpeed: 5000
                    }
                }
                ],
            appendDots: (dots: any) => (
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}
                >
                    {dots}
                </div>
            ),
            customPaging: (i: any) => (
                <div className={'slick-dots'}>
                    {i + 1}
                </div>
            )

        };

        let renderSlider = (
            <Slider className={'slider'} {...settings}>
                {renderSlides}
            </Slider>
        )

        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{renderSlider} </>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        listPosts: state.listPosts,
        isLoading: state.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getListPostsAction: () => dispatch(getListPostsAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCardPage);