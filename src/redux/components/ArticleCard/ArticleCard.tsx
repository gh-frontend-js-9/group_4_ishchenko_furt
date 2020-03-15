import React from "react";
import {DesignProcessCard} from "../DesignProcessCard/DesignProcessCard";
import {ThematicCardBlog} from "../ThematicCardBlog/ThematicCardBlog";


export const ArticleCard: React.FC = () => {
    return (
        <div className='article-card'>
            <DesignProcessCard/>
            <ThematicCardBlog/>
        </div>
    );
};