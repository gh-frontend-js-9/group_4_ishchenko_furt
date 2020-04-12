import React from "react";
import './MainCard.scss'

export const MainCard: React.FC = (props: any) => {
    const classForContent = (props.greyColor ? "main-card__paragraph--grey" : "main-card__paragraph");

    return (<div className="main-card">
        <p className="main-card__author">
                <span className={classForContent}>
                    BY &nbsp;
                </span>
            TOMAS LAURINAVICIUS &nbsp;
            <span className={classForContent}>
                    IN &nbsp;
                </span>
            {props.tags}
        </p>
        <h3 className="main-card__title">{props.title}</h3>
        <p className={classForContent}>{props.description}</p>
    </div>)
};