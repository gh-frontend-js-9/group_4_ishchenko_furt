import React from "react";
import './MainCard.scss';

export const MainCard: React.FC = (props: any) => (
    <div className={'main-card'} key={props._id}>
        <p className="main-card__author">BY TOMAS LAURINAVICIUS IN DESIGN PROCESS</p>
        <h3 className="main-card__title">{props.title}</h3>
        <p className="main-card__paragraph">{props.description}</p>
    </div>
)