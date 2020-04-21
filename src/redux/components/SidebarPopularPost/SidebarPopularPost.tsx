import React, {Component} from "react";
import {SidebarBox} from "../SidebarBox/SidebarBox";
import './SidebarPost.scss';
import {connect} from "react-redux";
import {getPopularThematicPostAction} from '../../actions/getPostsActions';

interface IProps {
    getPopularThematicPostAction?: any,
    popularThematicPost?: any,
}

class SidebarPopularPost extends Component<IProps, {}>{
    componentDidMount() {
        this.props.getPopularThematicPostAction();
    };

    render(){
        let renderPopularPost = this.props.popularThematicPost.map((post: any) => (
            <div className={'sidebar-post'}>
                <div className={'sidebar-post__image'} />
                <div className={'sidebar-post__text'}>
                    <p className={'sidebar-post__tag'}>
                        {post.tags}
                    </p>
                    <h3 className={'sidebar-post__title'}>
                        {post.title}
                    </h3>
                </div>
            </div>
        ));

        return(
            <SidebarBox>
                <h3 className={'sidebar-title'}>
                    Popular post
                </h3>
                {renderPopularPost}
            </SidebarBox>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        popularThematicPost: state.postsReducers.popularThematicPost,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPopularThematicPostAction: () => dispatch(getPopularThematicPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarPopularPost);