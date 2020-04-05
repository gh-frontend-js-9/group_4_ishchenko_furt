import React, {Component} from "react";
import Loading from "../../components/Healpers/Loading";
import {connect} from "react-redux";
import {ThematicBlogCard} from "../../components/ThematicBlogCard/ThematicBlogCard";
import {getPopularThematicPostAction} from '../../actions/getPostsActions'
import '../../components/BoxCard/BoxCard.scss'

interface IProps {
    getPopularThematicPostAction?: any,
    isLoading?: boolean,
    popularThematicPost?: any,
}

class PopularThematicPostPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPopularThematicPostAction();
    };

    render() {
        let renderPopularThematicPost = this.props.popularThematicPost.map((post: any) =>
            <ThematicBlogCard key={post._id} {...post}/>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderPopularThematicPost}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        popularThematicPost: state.postsReducers.popularThematicPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPopularThematicPostAction: () => dispatch(getPopularThematicPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularThematicPostPage);