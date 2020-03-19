import React from "react";
import './FlexBox.scss'

export const FlexBox = (props: any) => {
    const {children} = props;

    return (
        <div className='flex-box'>
            {children}
        </div>
    )
};