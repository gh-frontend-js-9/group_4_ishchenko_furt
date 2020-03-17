import React from "react";
import {CategoryBlogCard} from "../CategoryBlogCard/CategoryBlogCard";
import {ThematicBlogCard} from "../ThematicBlogCard/ThematicBlogCard";
import {MainCard} from "../MainCard/MainCard";
import './BoxCard.scss'

export const BoxCard: React.FC = (props: any) => {

    return <>
        <div className='box-card'>
            <div className='box-card__first-section'>
                <CategoryBlogCard {...props} className='box-card__category'/>
                <MainCard {...props} className='box-card__main-card'/>
            </div>

            <div className='box-card__second-section second-section'>
                <div className='second-section__row'>
                    <ThematicBlogCard {...props} className='box-card__thematic-block-card'/>
                    <ThematicBlogCard {...props} className='box-card__thematic-block-card'/>
                </div>
                <div className='second-section__row'>
                    <ThematicBlogCard {...props} className='box-card__thematic-block-card'/>
                    <ThematicBlogCard {...props} className='box-card__thematic-block-card'/>
                </div>
            </div>

        </div>
    </>
};