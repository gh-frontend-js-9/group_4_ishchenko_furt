import React from 'react'

export const Content = (props) => {
    const classContent = (props.mdFontSize ? "content--md-font-size" : 'lg-20px-font-size');
    // (props.greyColor ? "main-card__paragraph--grey" : '')
    const {children} = props;

    return (
        <p className={classContent}>
            {children}
        </p>
    )
}