import React from "react";
import {CategoryBlogCard} from "../CategoryBlogCard/CategoryBlogCard";
import './BoxCard.scss'
import {MainCard} from "../MainCard/MainCard";

export const BoxCard: React.FC = (props: any) => {

    return <>
        <div className='box-card'>
            <CategoryBlogCard {...props}/>
            <div className='box-card__main-card main-card--hovered '>
                <MainCard {...props}/>
            </div>
        </div>
    </>
};