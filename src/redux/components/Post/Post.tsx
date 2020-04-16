import React from "react";
import './Post.scss'

export const Post: React.FC = (props:any) => {
    const {children} = props;

    return (
        <div className={'post'}>
            {children}
        </div>
    )
};