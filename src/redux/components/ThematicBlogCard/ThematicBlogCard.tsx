import React from "react";
import './ThematicBlogCard.scss'

export const ThematicBlogCard: React.FC = (props: any) => {

    return <div className="thematic-blog-card thematic-blog-card--hovered">
                <p className="thematic-blog-card__theme"> {props.theme}</p>
                <h3 className="thematic-blog-card__title">{props.title}</h3>
         </div>
};