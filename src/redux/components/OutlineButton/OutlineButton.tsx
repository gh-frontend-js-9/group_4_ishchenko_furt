import React from "react"
import './OutlineButton.scss'

export const OutlineButton = (props: any) => {
    const {children} = props;
    const classes = (props.pinkColor ? 'outline-button--pink' : 'outline-button--gray');

    return (
        <button {...props}
                className={`${classes} outline-button--hovered`}>
            {children}
        </button>
    )
};