import React from "react";
import './Post.scss'
import {BreadCrumb} from "../BreadCrumb/BreadCrumb";
import PostContent from "../PostContent/PostContent";
import {Title} from "../Title/Title";
import {FlexBox} from "../FlexBox/FlexBox";
import FeaturedPostComponent from "../FeaturedPostComponent/FeaturedPostComponent";

export const Post: React.FC = () => {

    return (
        <>
            <div className={'post'}>
                <BreadCrumb/>
                <PostContent/>
            </div>
            <Title mixin = 'post__title' xxxlFontSize>
                You might also like...
            </Title>

            <FlexBox>
                <FeaturedPostComponent/>
            </FlexBox>
        </>
    )
};