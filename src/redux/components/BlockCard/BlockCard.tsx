import React from "react";
import './BlockCard.scss'
import BlogPostPage from "../../pages/BlogPostPage";


export const BlockCard: React.FC = () => {
    return (
        <div className='block-card'>
            <div className='block-card__main-card'>
                <BlogPostPage/>
            </div>
        </div>
    );
};