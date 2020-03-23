import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../components/Healpers/Loading";
import {getPopularPostAction} from "../actions/getPostsActions";
import {BoxCard} from "../components/BoxCard/BoxCard";
import {MainCard} from "../components/MainCard/MainCard";
import './BlogPostPage.scss'

interface IProps {
    getPopularPostAction?: any,
    isLoading?: boolean,
    popularPost?: any,
}

class BlogPostPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPopularPostAction();
    };

    render() {

        let renderPopularPost = this.props.popularPost.map((post: any) =>
            <BoxCard {...post} key={post._id}>
                <div className='blog-page-main-card main-card--hovered '>
                    <MainCard {...post}/>
                </div>
            </BoxCard>
        );

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderPopularPost} </>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        popularPost: state.popularPost,
        isLoading: state.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPopularPostAction: () => dispatch(getPopularPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostPage);