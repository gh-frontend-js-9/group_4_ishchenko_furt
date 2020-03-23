import React from "react";
import {CategoryBlogCard} from "../CategoryBlogCard/CategoryBlogCard";
import {ThematicBlogCard} from "../ThematicBlogCard/ThematicBlogCard";
import './BoxCard.scss'

export const BoxCard: React.FC = (props: any) => {
const {children} = props
    return <>
        <div className='box-card'>
            <div className='box-card__first-section'>
                <CategoryBlogCard {...props}/>
                {children}
            </div>

            <div className='box-card__second-section second-section'>
                <div className='second-section__view-all'>
                    <span  className='second-section__view-all--hovered'>View all</span>
                </div>

                <div className='second-section__row'>
                    <ThematicBlogCard {...props} />
                    <ThematicBlogCard {...props} />
                </div>
                <div className='second-section__row'>
                    <ThematicBlogCard {...props}/>
                    <ThematicBlogCard {...props}/>
                </div>
            </div>

        </div>
    </>
};