import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import NewPostComponent from "../components/NewPostComponent/NewPostComponent";
import {InsideWrapper} from "../components/InsideWrapper/InsideWrapper";
import {CommentsBox} from "../components/CommentsBox/CommentsBox";

export const NewPage: React.FC = () => {

    return (
        <Wrapper>
            <NewPostComponent/>

            <InsideWrapper>
                <CommentsBox/>
            </InsideWrapper>
        </Wrapper>
    );
};
