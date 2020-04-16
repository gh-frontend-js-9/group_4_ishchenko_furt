import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import {Post} from "../components/Post/Post";
import {BreadCrumb} from "../components/BreadCrumb/BreadCrumb";
import {FlexBox} from "../components/FlexBox/FlexBox";
import FeaturedPostComponent from "../components/FeaturedPostComponent/FeaturedPostComponent";
import PostContent from "../components/PostContent/PostContent";
import CommentsListComponent from "../components/CommentsListComponent/CommentsListComponent";
import {Title} from "../components/Title/Title";
import {FormBox} from "../components/FormBox/FormBox";
import {OutlineButton} from "../components/OutlineButton/OutlineButton";
import {Content} from "../components/Content/Content";

export const NewPage: React.FC = () => {
    return (
        <>
            <Wrapper>
                <Post>
                    <BreadCrumb/>
                    <PostContent/>
                </Post>
                <Title font={'xxxlFontSize'}>
                    You might also like...
                </Title>
                <FlexBox>
                    <FeaturedPostComponent/>
                </FlexBox>
                <div>
                    <Title font={'xxlFontSize'}> Comments </Title>
                    <OutlineButton >
                        Leave a Comment
                    </OutlineButton>
                </div>
                <Content>Comment policy: We love comments and appreciate the time that readers spend to share ideas and
                    give feedback.
                    However, all comments are manually moderated and those deemed to be spam or solely promotional will
                    be deleted.
                </Content>
                <CommentsListComponent/>
                <FormBox/>
            </Wrapper>
        </>
    );
};