import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../components/Healpers/Loading";
import {getListPostsAction} from "../actions/getListPostsAction";
import {BoxCard} from "../components/BoxCard/BoxCard";
import {MainCard} from "../components/MainCard/MainCard";
import {FeaturedImg} from "../components/FeaturedImg/FeaturedImg";

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
        let renderMainCard = this.props.listPosts.map((post: any) =>
            <MainCard  {...post} key={post._id}/>);

        let renderBoxCard = this.props.listPosts.map((post: any) =>
            <BoxCard {...post} key={post._id}/>);

        let renderFeaturedPost = this.props.listPosts.map((post: any) =>
            <div className='box-featured-post'>
                <FeaturedImg {...post} key={post._id}/>
                <MainCard {...post} key={post._id}/>
            </div>);
        console.log(this.props.listPosts);
        
        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{renderMainCard} {renderBoxCard} {renderFeaturedPost}</>}
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