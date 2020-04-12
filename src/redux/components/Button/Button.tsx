import React from "react"
import './Button.scss'

export const Button = (props: any) => {
    const {children} = props;
    return (
        <button {...props}
                className='button button--hovered'>
            {children}
        </button>
    )
};