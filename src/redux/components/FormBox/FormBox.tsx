import React from 'react'
import './FormBox.scss'
import {Title} from "../Title/Title";
import CommentsFormComponent from "../CommentsFormComponent/CommentsFormComponent";

export const FormBox = () => {
    return (
        <div className='form-box'>
            <Title font = 'xxlFontSize'>Leave a Reply</Title>
            <CommentsFormComponent/>
        </div>
    )
};