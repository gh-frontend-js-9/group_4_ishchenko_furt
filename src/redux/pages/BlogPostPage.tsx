import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../components/Healpers/Loading";
import {getListPostsAction} from "../actions/getListPostsAction";
import {ThematicBlogCard} from "../components/ThematicBlogCard/ThematicBlogCard";

interface IProps {
    getListPostsAction?: any,
    isLoading?: boolean,
    listPosts?: any,
}

class BlogPostPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
        console.log(this.props.listPosts)
    };
    render() {

        // let getListPosts = this.props.listPosts.map((post: any) =>
        //     <ThematicBlogCard {...post} key={post._id}/>);
        return (
            <>
                {this.props.isLoading ? <Loading/> : <>  </>}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostPage);