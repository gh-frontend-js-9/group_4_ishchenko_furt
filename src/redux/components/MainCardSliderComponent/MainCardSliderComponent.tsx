import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import Slider from "react-slick";
import './MainCardSliderComponent.scss';
import {getListPostsAction} from "../../actions/getPostsActions";
import {settings} from "./MainCardSettings";
import {MainCard} from '../MainCard/MainCard';
import './MainCardSliderComponent.scss'


interface IProps {
    getListPostsAction?: any,
    isLoading?: boolean,
    listPosts?: any,
}

class MainCardSliderComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
    };

    render() {
        let response = Object.values(this.props.listPosts);

        let renderSlides = response.map((slide: any) => (
            <div className='main-card__slide'>
                <div className='slide-box'>
                    <MainCard {...slide} />
                </div>
            </div>
        ));

        let renderSlider = (
            <Slider className='slider' {...settings}>
                {renderSlides}
            </Slider>
        );

        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{renderSlider} </>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        listPosts: state.postsReducers.listPosts,
        isLoading: state.postsReducers.isLoading,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getListPostsAction: () => dispatch(getListPostsAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCardSliderComponent);