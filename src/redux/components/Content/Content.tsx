import React from 'react'

export const Content = (props) => {
    const classContent = (props.mdFontSize ? "content--md-font-size" : 'content--lg-20px-font-size');

    const {children} = props;

    return (
        <p className={classContent}>
            {children}
        </p>
    )
}