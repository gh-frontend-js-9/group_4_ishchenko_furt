import React from "react";
import './BlockCard.scss'
import MainCardPage from "../../pages/MainCardPage";
import ThematicBlogCardPage from "../../pages/ThematicBlogCardPage";

export const BlockCard: React.FC = () => {
    return (
        <div className='block-card'>
            <div className='block-card__main-card'>
                <MainCardPage/>
            </div>
            <div className='block-card__thematic-blog-card'>
                <ThematicBlogCardPage/>
            </div>
        </div>
    );
};