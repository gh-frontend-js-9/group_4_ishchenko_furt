import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../components/Healpers/Loading";
import {getListPostsAction} from "../actions/getListPostsAction";
import {MainCard} from "../components/MainCard/MainCard";
import './MainCardPage.scss'
import {FeaturedImg} from "../components/FeaturedImg/FeaturedImg";

interface IProps {
    getListPostsAction?: any,
    isLoading?: boolean,
    listPosts?: any,
}

class FeaturedPostPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
    };

    render() {
        let renderFeaturedPost = this.props.listPosts.map((post: any) =>
            <div className='featured-card'>
                <div className='featured-card__img'>
                    <FeaturedImg {...post}/>
                </div>
                <div className='featured-card__main-card'>
                    <MainCard {...post}/>
                </div>
            </div>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{renderFeaturedPost} </>}
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPostPage);