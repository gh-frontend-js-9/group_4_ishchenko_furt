import React, {Component} from "react";
import './PostContent.scss'
import {Content} from "../Content/Content";
import {Title} from "../Title/Title";
import {ImageBox} from "../ImageBox/ImageBox";
import {IconBox} from "../IconBox/IconBox";
import {Icon} from "../Icon/Icon";
import {Like} from "../Like/Like";
import {Figure} from "../Figure/Figure";
import {FigCaption} from "../FigCaption/FigCaption";
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
                <Content greyColor>
                    {post.paragraphReason}
                </Content>
                <Title font = {'lgFontSize'}>
                    {post.titleAbout}
                </Title>
                <Content greyColor>
                    {post.paragrapgAbout}
                </Content>
                <Title>
                    {post.titleList}
                </Title>
                {/*<Content>
                    {post.list.map((item: any)=>(
                        <div>1</div>
                    ))}
                </Content>*/}
                <Figure>
                    <div className={'post'}>
                        <ImageBox {...post} />
                        <ImageBox {...post} />
                    </div>
                    <FigCaption>
                        “ WP Page Builder offers a lot of ready-to-use design blocks to make your site development process a lot faster and easier “
                    </FigCaption>
                </Figure>
            </>
        ))



        return (
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