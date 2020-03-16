import React from "react";

export const Category: React.FC = (props: any) => {
    return <h3 className='article-header'>
        {props.category}
    </h3>
};