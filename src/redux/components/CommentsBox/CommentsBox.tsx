import React from 'react'
import {CommentPolicyBox} from "../CommentPolicyBox/CommentPolicyBox";
import CommentsListComponent from "../CommentsListComponent/CommentsListComponent";
import './CommentsBox.scss'

export const CommentsBox = () => {

    return (
        <>
            <CommentPolicyBox/>
            <div className='comments-list-box'>
                <CommentsListComponent/>
            </div>
        </>
    );
};