import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../components/Healpers/Loading";
import {getListPostsAction} from "../actions/getListPostsAction";
import {BoxCard} from "../components/BoxCard/BoxCard";
import {MainCard} from "../components/MainCard/MainCard";
import './BlogPostPage.scss'

interface IProps {
    getListPostsAction?: any,
    isLoading?: boolean,
    listPosts?: any,
}

class BlogPostPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
    };

    render() {

        let renderBoxCard = this.props.listPosts.map((post: any) =>
            <BoxCard {...post} key={post._id}>
                <div className='blog-page-main-card main-card--hovered '>
                    <MainCard {...post}/>
                </div>
            </BoxCard>
        );

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderBoxCard} </>}
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostPage);