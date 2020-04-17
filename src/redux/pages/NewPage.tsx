import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import {Post} from "../components/Post/Post";
import {InsideWrapper} from "../components/InsideWrapper/InsideWrapper";
import {CommentsBox} from "../components/CommentsBox/CommentsBox";


export const NewPage: React.FC = () => {

    return (
        <Wrapper>
            <Post/>

            <InsideWrapper>
                <CommentsBox/>
            </InsideWrapper>
        </Wrapper>
    );
};