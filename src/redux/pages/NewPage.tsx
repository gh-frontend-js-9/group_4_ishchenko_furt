import React from "react";
import {Wrapper} from "../components/Wrapper/Wrapper";
import CommentsListComponent from "../components/CommentsListComponent/CommentsListComponent";
import {FormBox} from "../components/FormBox/FormBox";
import NewPostComponent from "../components/NewPostComponent/NewPostComponent";
import {CommentPolicyBox} from "../components/CommentPolicyBox/CommentPolicyBox";
import {InsideWrapper} from "../components/InsideWrapper/InsideWrapper";

export const NewPage: React.FC = () => {
    return (
        <>
            <Wrapper>
                <NewPostComponent/>
                <InsideWrapper>
                    <CommentPolicyBox/>
                    <CommentsListComponent/>
                    <FormBox/>
                </InsideWrapper>
            </Wrapper>
        </>
    );
};
