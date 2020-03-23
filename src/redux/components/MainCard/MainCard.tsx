import React from "react";
import './MainCard.scss'

export const MainCard: React.FC = (props: any) => {
    const classForDescription = (props.greyColor ? "main-card__paragraph--grey" : "main-card__paragraph");
    const classForAuthor = (props.greyColor ? "main-card__paragraph--grey" : '');

    return <>
        <div className="main-card">
            <p className="main-card__author">
                <span className={classForAuthor}>
                    BY &nbsp;
                </span>
                TOMAS LAURINAVICIUS &nbsp;
                <span className={classForAuthor}>
                    IN &nbsp;
                </span>
                DESIGN PROCESS
            </p>
            <h3 className="main-card__title">{props.title}</h3>
            <p className={classForDescription}>{props.description}</p>
        </div>
    </>
};