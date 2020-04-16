import React from 'react'
import './Content.scss'

export const Content = (props) => {
    const {children} = props;

    const paddingSize = (props.postPadding ? 'content--post-pd' : '');
    const fontSizeContent = (props.mdFontSize ? "content--md-font-size" : 'content--lg-20px-font-size' );
    const colorContent = (props.greyColor ? "main-card__paragraph--grey" : '');

    const classContent = ` ${fontSizeContent} ${colorContent} ${paddingSize}`;

    return (
        <p className={classContent}>
            {children}
        </p>
    )
};