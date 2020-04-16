import React, {Component} from "react";
import './PostContent.scss'
import {Content} from "../Content/Content";
import {Title} from "../Title/Title";
import {ImageBox} from "../ImageBox/ImageBox";
import {IconBox} from "../IconBox/IconBox";
import {Icon} from "../Icon/Icon";
import {Like} from "../Like/Like";
import {Figure} from "../Figure/Figure";
import {List} from "../List/List";
import {FigCaption} from "../FigCaption/FigCaption";
import {Author} from "../Author/Author";
import {connect} from 'react-redux';
import {getNewPostAction} from "../../actions/getPostsActions";


interface IProps {
    getNewPostAction?: any,
    isLoading?: boolean,
    newPost?: any,
}

class PostContent extends Component<IProps, {}>{
    componentDidMount() {
        this.props.getNewPostAction();
    }

    render(){

        let renderPost= this.props.newPost.map((post: any)=>(
            <>
                <ImageBox {...post} imagePost/>
                <Content greyColor postPadding>
                    {post.paragraphReason}
                </Content>
                <Title font = {'xxlFontSize'} postPadding>
                    {post.titleAbout}
                </Title>
                <Content greyColor postPadding>
                    {post.paragraphAbout}
                </Content>
                <ImageBox {...post} imagePost/>
                <Content greyColor postPadding>
                    {post.titleList}
                </Content>
                <List {...post}/>
                <Figure>
                    <div className={'figure-image'}>
                        <ImageBox {...post} imageFigure/>
                        <ImageBox {...post} imageFigure/>
                    </div>
                    <FigCaption>
                        {post.figCaption}
                        <Author {...post}/>
                    </FigCaption>
                </Figure>
            </>
        ))

        return (
            <div className={'blog'}>
                <IconBox>
                    <Icon postElement/>
                </IconBox>
                <div className={'content'}>
                    {renderPost}
                </div>
                <Like/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        newPost: state.postsReducers.newPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getNewPostAction: () => dispatch(getNewPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContent);