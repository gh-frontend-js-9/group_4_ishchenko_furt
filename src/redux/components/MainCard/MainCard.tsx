import React from "react";
import './MainCard.scss'
import {Title} from "../Title/Title";
import {Content} from "../Content/Content";
import {PostAuthor} from "../PostAuthor/PostAuthor";

export const MainCard = (props: any) => {

    return (
        <div className="main-card">
            <PostAuthor {...props} textWhite mdFontSize/>
            <Title xxxlFontSize mixin='main-card__title' xxlFontSize>{props.title}</Title>
            <Content mdFontSize textWhite>{props.description}</Content>
        </div>)
};