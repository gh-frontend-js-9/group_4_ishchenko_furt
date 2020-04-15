import React from 'react'
import {CommentPolicyBox} from "../CommentPolicyBox/CommentPolicyBox";
import CommentsListComponent from "../CommentsListComponent/CommentsListComponent";
import './CommentsBox.scss'
import {Title} from "../Title/Title";
import CommentsFormComponent from "../CommentsFormComponent/CommentsFormComponent";

export const CommentsBox = () => {

    return (
        <>
            <CommentPolicyBox/>
            <div className='comments-list-box'>
                <CommentsListComponent/>
            </div>

            <div className='form-box'>
                <Title font = 'xxlFontSize'>Leave a Reply</Title>
                <CommentsFormComponent/>
            </div>
        </>
    );
};