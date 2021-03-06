import React, {Component} from 'react';
import './PostContent.scss'
import {Title} from '../Title/Title';
import {FlexBox} from '../FlexBox/FlexBox';
import {ImageBox} from '../ImageBox/ImageBox';
import {IconBox} from '../IconBox/IconBox';
import {Icon} from '../Icon/Icon';
import {InnerHTML} from '../InnerHTML/InnerHTML';
import {Like} from '../Like/Like';
import {Figure} from '../Figure/Figure';
import {List} from '../List/List';
import {FigCaption} from '../FigCaption/FigCaption';
import {Author} from '../Author/Author';
import {connect} from 'react-redux';
import {getNewPostAction} from '../../redux/actions/getPostsActions';


interface IProps {
    getNewPostAction?: any,
    isLoading?: boolean,
    newPost?: any,
}

class PostContent extends Component <IProps, {}> {

    componentDidMount() {
        this.props.getNewPostAction();
    }

    render() {

        let renderPost = this.props.newPost.map((post: any, num: number) => (
            <div key={num}>
                <ImageBox {...post} imagePost/>
                <InnerHTML postPadding>
                    {post.paragraphReason}
                </InnerHTML>

                <Title xxlFontSize mixin = 'post-content__title'>
                    {post.titleAbout}
                </Title>

                <InnerHTML postPadding>
                    {post.paragraphAbout}
                </InnerHTML>

                <ImageBox {...post} imagePost/>

                <InnerHTML postPadding>
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
                        <Author>
                            Follow me
                            <a href='https://www.instagram.com/?hl=ru'>
                                {post.media}
                            </a>
                        </Author>
                    </FigCaption>
                </Figure>
            </div>
        ));

        return (
            <FlexBox post>
                <IconBox>
                    <Icon postElement/>
                </IconBox>
                <div className='post-content'>
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