import React from "react";
import './MainCard.scss'

export const MainCard: React.FC = (props: any) => {
    const classes = (props.greyColor ? "main-card__paragraph--grey" : "main-card__paragraph");

    return (
        <div className="main-card">
            <p className="main-card__author">
                <span className={classes}>
                    BY &nbsp;
                </span>
                TOMAS LAURINAVICIUS &nbsp;
                <span className={classes}>
                    IN &nbsp;
                </span>
                {props.tags}
            </p>
            <h3 className="main-card__title">{props.title}</h3>
            <p className={classes}>{props.description}</p>
        </div>)
};