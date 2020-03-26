import React from "react";
import {CategoryBlogCard} from "../CategoryBlogCard/CategoryBlogCard";
import './BoxCard.scss'
import {MainCard} from "../MainCard/MainCard";
import ThematicPostPage from "../../pages/ThematicPostPage/ThematicPostPage";

export const BoxCard: React.FC = (props: any) => {

    return <>
        <div className='box-card'>
            <div className='box-card__first-section'>
                <CategoryBlogCard {...props}/>
                <div className='box-card__main-card main-card--hovered '>
                    <MainCard {...props}/>
                </div>
            </div>

            <div className='box-card__second-section second-section'>
                <div className='second-section__view-all'>
                    <span  className='second-section__view-all--hovered'>View all</span>
                </div>  `

                <div className='second-section__table'>
                    <ThematicPostPage  />
                </div>
            </div>

        </div>
    </>
};