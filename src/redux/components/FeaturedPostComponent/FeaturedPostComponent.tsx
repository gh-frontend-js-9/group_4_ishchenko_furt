import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import {MainCard} from "../MainCard/MainCard";
import {ImageBox} from "../ImageBox/ImageBox";
import './FeaturedPostComponent.scss'
import {getFeaturedPostAction} from "../../actions/getPostsActions";

interface IProps {
    getFeaturedPostAction?: any,
    isLoading?: boolean,
    featuredPost?: any,
}

class FeaturedPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getFeaturedPostAction();
    };

    render() {
        let renderFeaturedPost = this.props.featuredPost.map((post: any, num: number) =>
            <div className='featured-post-page' key={num}>
                <ImageBox {...post}/>
                <MainCard greyColor {...post}/>
            </div>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderFeaturedPost}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        featuredPost: state.postsReducers.featuredPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getFeaturedPostAction: () => dispatch(getFeaturedPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPostComponent);