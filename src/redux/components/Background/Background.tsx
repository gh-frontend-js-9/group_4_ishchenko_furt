import React from "react";
import './Background.scss'

export const Background = (props: any) => {
    const {children} = props;

    return (
        <div className='background'>
            {children}
        </div>
    )
};