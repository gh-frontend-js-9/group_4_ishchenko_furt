import React from "react"
import './OutlineButton.scss'

export const OutlineButton = (props: any) => {
    const {children} = props;
    const classes = (props.pinkColor ? 'outline-button--pink' : 'outline-button--gray');
     // document.getElementById('5').scrollIntoView({ behavior: 'smooth' })
    return (
        <button  {...props}
                className={`${classes} outline-button--hovered`}>
            {children}
        </button>
    )
};