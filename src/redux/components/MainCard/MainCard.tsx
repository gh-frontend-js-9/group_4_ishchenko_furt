import React from "react";
import './MainCard.scss'
import {Title} from "../Title/Title";
import {Content} from "../Content/Content";
import {Author} from "../Author/Author";

export const MainCard = (props: any) => {

    return (
        <div className="main-card">
            <Author {...props} textWhite mdFontSize/>
            <Title xxxlFontSize mixin='main-card__title' xxlFontSize>{props.title}</Title>
            <Content mdFontSize primary>{props.description}</Content>
        </div>)
};