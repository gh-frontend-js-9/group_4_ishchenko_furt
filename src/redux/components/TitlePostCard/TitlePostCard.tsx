import React from "react";
import {PostAuthor} from "../PostAuthor/PostAuthor";
import {Title} from "../Title/Title";
import {Content} from "../Content/Content";
import './TitlePostCard.scss'
import './../MainCard/MainCard.scss';

export const TitlePostCard:React.FC = () =>{
    let title = {
        tags: 'DESIGN PROCESS'
    }

    return(
        <div className={'main-card title-post-card'}>
            <Title xxxlFontSize mixin='main-card__title' >
                10 Reasons to Build Your Website with WP Page Builder
            </Title>
            <Content mdFontSize >
                People’s quest for creating websites has easily taken us to a new era of site development.
                Where, with the availability of robust page building tools,
                creating websites has become a lot more fun (especially for non-developers).
            </Content>
            <PostAuthor {...title} mdFontSize/>
        </div>
    )
}