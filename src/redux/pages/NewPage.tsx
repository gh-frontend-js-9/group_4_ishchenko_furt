import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import {Post} from "../components/Post/Post";
import {BreadCrumb} from "../components/BreadCrumb/BreadCrumb";
import {InsideWrapper} from "../components/InsideWrapper/InsideWrapper";
import {CommentsBox} from "../components/CommentsBox/CommentsBox";
import {FlexBox} from "../components/FlexBox/FlexBox";
import FeaturedPostComponent from "../components/FeaturedPostComponent/FeaturedPostComponent";
import PostContent from "../components/PostContent/PostContent";
import {Title} from "../components/Title/Title";

export const NewPage: React.FC = () => {

    return (
        <Wrapper>
            <Post>
                <BreadCrumb/>
                <PostContent/>
            </Post>
            <Title xxxlFontSize>
                You might also like...
            </Title>
            <FlexBox>
                <FeaturedPostComponent/>
            </FlexBox>

            <InsideWrapper>
                <CommentsBox/>
            </InsideWrapper>
        </Wrapper>
    );
};