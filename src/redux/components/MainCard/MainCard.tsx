import React from "react";
import './MainCard.scss'
import {Category} from "../Category/Category";
import {ThematicBlogCard} from "../ThematicBlogCard/ThematicBlogCard";

export const MainCard: React.FC = (props: any) => {
    console.log(props)
    return <>
        <Category {...props} />

        <div key={props._id} className="main-card main-card--hovered">
            {/*<p className="main-card__author">{props.author}</p>*/}
            <h3 className="main-card__title">{props.title}</h3>
            <p className="main-card__paragraph">{props.description}</p>
        </div>
        
        <div className='block-card__thematic-blog-card'>
            <ThematicBlogCard {...props}/>
        </div>

    </>
};