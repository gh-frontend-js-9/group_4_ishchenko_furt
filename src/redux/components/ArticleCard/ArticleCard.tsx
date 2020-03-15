import React from "react";
import {DesignProcessCard} from "../DesignProcessCard/DesignProcessCard";
import {ThematicBlogCard} from "../ThematicCardBlog/ThematicBlogCard";
import './ArticleCard.scss'

export const ArticleCard: React.FC = () => {
    return (
        <div className='article-card'>
            <div className='article-card__design-process-card'>
                <DesignProcessCard/>
            </div>
            <div className='article-card__thematic-blog-card'>
                <ThematicBlogCard/>
            </div>
        </div>
    );
};