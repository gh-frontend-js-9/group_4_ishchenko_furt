import React, {Component} from "react";
import './PostContent.scss'
import {Title} from "../Title/Title";
import {FlexBox} from "../FlexBox/FlexBox";
import {ImageBox} from "../ImageBox/ImageBox";
import {IconBox} from "../IconBox/IconBox";
import {Icon} from "../Icon/Icon";
import {InnerHTML} from "../InnerHTML/InnerHTML";
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
                <InnerHTML greyColor postPadding>
                    {post.paragraphReason}
                </InnerHTML>
                <Title font = {'xxlFontSize'} postPadding>
                    {post.titleAbout}
                </Title>
                <InnerHTML greyColor postPadding>
                    {post.paragraphAbout}
                </InnerHTML>
                <ImageBox {...post} imagePost/>
                <InnerHTML greyColor postPadding>
                    {post.titleList}
                </InnerHTML>
                <List {...post}/>
                <Figure>
                    <FlexBox post center>
                        <ImageBox {...post} imageFigure/>
                        <ImageBox {...post} imageFigure/>
                    </FlexBox>
                    <FigCaption>
                        {post.figCaption}
                        <Author {...post}/>
                    </FigCaption>
                </Figure>
            </>
        ))

        return (
            <FlexBox post>
                <IconBox>
                    <Icon postElement/>
                </IconBox>
                <div className={'content'}>
                    {renderPost}
                </div>
                <Like/>
            </FlexBox>
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