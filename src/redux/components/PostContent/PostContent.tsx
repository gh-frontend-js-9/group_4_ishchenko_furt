import React, {Component} from "react";
import './PostContent.scss'
import {Content} from "../Content/Content";
import {ImageBox} from "../ImageBox/ImageBox";
import {IconBox} from "../IconBox/IconBox";
import {Icon} from "../Icon/Icon";
import {Like} from "../Like/Like";
import {connect} from 'react-redux';
import {getPopularPostAction} from "../../actions/getPostsActions";


interface IProps {
    getPopularPostAction?: any,
    isLoading?: boolean,
    popularPost?: any,
}

class PostContent extends Component<IProps, {}>{
    componentDidMount() {
        this.props.getPopularPostAction();
    }

    render(){
        console.log(this.props.popularPost);
        let renderPost = this.props.popularPost.map((post: any)=> {
            console.log(post.content)
        })


        return(
            <div className={'post'}>
                <IconBox>
                    <Icon postElement/>
                </IconBox>
                <div className={'post__content'}>
                    {renderPost}
                </div>
                <Like/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        popularPost: state.postsReducers.popularPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPopularPostAction: () => dispatch(getPopularPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContent);