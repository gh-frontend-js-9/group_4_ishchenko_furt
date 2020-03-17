import React from "react";
import './CategoryBlogCard.scss'

export const CategoryBlogCard: React.FC = (props: any) => {
    return <h3 className='category-title'>
        {props.category}
    </h3>
};