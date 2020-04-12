import React from "react";
import CommentsFormComponent from "../components/CommentsFormComponent/CommentsFormComponent";
import {Wrapper} from "../components/Wrapper/Wrapper";
import CommentsListComponent from "../components/CommentsListComponent/CommentsListComponent";
import {Title} from "../components/Title/Title";

export const NewPage: React.FC = () => {
    return (
        <>
            <Wrapper>
                <CommentsListComponent/>
                <div className='comments-form-box'>
                    <Title>Leave a Reply</Title>
                    <CommentsFormComponent/>
                </div>
            </Wrapper>
        </>
    );
};
