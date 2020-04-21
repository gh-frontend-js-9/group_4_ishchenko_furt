import React, {Component} from "react";
import {connect} from "react-redux";
import {SidebarBox} from "../SidebarBox/SidebarBox";
import {getEssentialsThematicPostAction} from '../../actions/getPostsActions';
import '../SidebarPopularPost/SidebarPost.scss';

interface IProps {
    getEssentialsThematicPostAction?: any,
    isLoading?: boolean,
    essentialsThematicPost?: any
}

class SidebarRecentPost extends Component<IProps, {}>{
    componentDidMount() {
        this.props.getEssentialsThematicPostAction();
    };

    render(){
        let renderRecentPost = this.props.essentialsThematicPost.map((post: any)=>(
            <div className={'sidebar-post'}>
                <div className={'sidebar-post__text'}>
                    <p className={'sidebar-post__tag'}>
                        {post.tags}
                    </p>
                    <h3 className={'sidebar-post__title'}>
                        {post.title}
                    </h3>
                </div>
            </div>
        ))

        return(
            <SidebarBox>
                <h3 className={'sidebar-title'}>
                    Recent post
                </h3>
                {renderRecentPost}
            </SidebarBox>
        )
    }

}

const mapStateToProps = (state: any) => {
    return {
        essentialsThematicPost: state.postsReducers.essentialsThematicPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getEssentialsThematicPostAction: () => dispatch(getEssentialsThematicPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarRecentPost);