import React from "react";
import './MainCard.scss'

export const MainCard: React.FC = (props: any) => {
    return <>
        <h3 className='article-header'>
            {props.header}
        </h3>
        <div className="main-card main-card--hovered">
            <p className="main-card__author">{props.author}</p>
            <h3 className="main-card__title">{props.title}</h3>
            <p className="main-card__paragraph">{props.paragraph}</p>
        </div>
    </>
};