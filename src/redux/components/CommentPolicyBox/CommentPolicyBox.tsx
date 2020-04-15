import React from 'react'
import {Title} from "../Title/Title";
import {OutlineButton} from "../OutlineButton/OutlineButton";
import {Content} from "../Content/Content";
import './CommentPolicyBox.scss'

export const CommentPolicyBox = () => {
    return (
        <>
            <div className='comment-policy-box'>
                <Title font='xxlFontSize'>
                    Comments
                </Title>

                <OutlineButton >
                    Leave a Comment
                </OutlineButton>

            </div>
            <Content>
                Comment policy: We love comments and appreciate the time that readers spend to share ideas and
                give feedback.
                However, all comments are manually moderated and those deemed to be spam or solely promotional will
                be deleted.
            </Content>
        </>

    )
};