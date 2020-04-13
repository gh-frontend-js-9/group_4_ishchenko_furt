import React from 'react'
import './Content.scss'

export const Content = (props) => {
    const {children} = props;

    const fontSizeContent = (props.mdFontSize ? "content--md-font-size" : 'content--lg-20px-font-size' );
    const colorContent = (props.greyColor ? "main-card__paragraph--grey" : '');
    const classes = ` ${fontSizeContent} ${colorContent}`;

    return (
        <p className={classes}>
            {children}
        </p>
    )
};