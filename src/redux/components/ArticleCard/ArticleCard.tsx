import React from "react";
import {ThematicBlogCard} from "../ThematicBlogCard/ThematicBlogCard";
import './ArticleCard.scss'
import MainCardContainer from "../../containers/MainCardContainer";
import ThematicBlogCardContainer from "../../containers/ThematicBlogCardContainer";

export const ArticleCard: React.FC = () => {
    return (
        <div className='article-card'>
            <div className='article-card__main-card'>
                <MainCardContainer/>
            </div>
            <div className='article-card__thematic-blog-card'>
                <ThematicBlogCardContainer/>
            </div>
        </div>
    );
};