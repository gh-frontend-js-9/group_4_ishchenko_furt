import React from "react";
import './Wrapper.scss'

export const Wrapper = (props: any) => {
    const {children} = props;

    return (
        <div className='wrapper'>
            {children}
        </div>
    )
};
