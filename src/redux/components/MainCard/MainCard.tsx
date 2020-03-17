import React from "react";
import './MainCard.scss'

export const MainCard: React.FC = (props: any) => {
    return <>
        <div key={props._id} className="main-card main-card--hovered">
            <p className="main-card__author">BY   TOMAS LAURINAVICIUS   IN   DESIGN PROCESS</p>
            <h3 className="main-card__title">{props.title}</h3>
            <p className="main-card__paragraph">{props.description}</p>
        </div>
    </>
};