import React from "react";
import './BackgroundBlock.scss';

export const BackgroundBlock = (props: any) => {
    const {children} = props;

    return (
        <div className='background-block'>
            {children}
        </div>
    );
};