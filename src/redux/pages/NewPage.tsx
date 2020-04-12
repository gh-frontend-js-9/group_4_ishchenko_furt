import React from "react";
import CommentsFormComponent from "../components/CommentsFormComponent/CommentsFormComponent";
import {Wrapper} from "../components/Wrapper/Wrapper";
import {BreadCrumb} from "../components/BreadCrumb/BreadCrumb";
import {Post} from "../components/Post/Post";
import CommentsListComponent from "../components/CommentsListComponent/CommentsListComponent";
import {Title} from "../components/Title/Title";

export const NewPage: React.FC = () => {
    return (
        <>
            <Wrapper>
                <BreadCrumb/>
                <Post/>
                <CommentsListComponent/>
                <div className='comments-form-box'>
                    <Title>Leave a Reply</Title>
                    <CommentsFormComponent/>
                </div>
            </Wrapper>
        </>
    );
};