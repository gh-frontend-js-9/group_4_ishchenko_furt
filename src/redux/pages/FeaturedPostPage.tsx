import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../components/Healpers/Loading";
import {getListPostsAction} from "../actions/getListPostsAction";
import {MainCard} from "../components/MainCard/MainCard";
import {FeaturedImg} from "../components/FeaturedImg/FeaturedImg";
import './FeaturedPostPage.scss'

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

        let renderFeaturedPost = this.props.listPosts.map((post: any, num:number) =>
            <div className='featured-post-page' key={num}>
                <FeaturedImg {...post}/>
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