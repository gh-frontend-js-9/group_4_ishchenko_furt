import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import {Post} from "../components/Post/Post";
import {InsideWrapper} from "../components/InsideWrapper/InsideWrapper";
import {CommentsBox} from "../components/CommentsBox/CommentsBox";
import PostMainCard from "../components/PostMainCardComponent/PostMainCardComponent";
import {BackgroundBlock} from "../components/BackgroundBlock/BackgroundBlock";

export const NewPage: React.FC = () => {

    return (
        <>
            <BackgroundBlock mixin = 'background-block__new-page'>
                <Wrapper>
                    <PostMainCard/>
                </Wrapper>
            </BackgroundBlock>
            <Wrapper>
                <Post/>

                <InsideWrapper>
                    <CommentsBox/>
                </InsideWrapper>
            </Wrapper>
        </>
    );
};