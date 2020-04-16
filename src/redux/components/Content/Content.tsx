import React from 'react'
import './Content.scss'

export const Content = (props) => {
    const {children} = props;

    const fontSize = (props.mdFontSize ? "content--md-font-size" : props.lgSecondFontSize
        ? 'content--lg-second-font-size' : '');
    const color = (props.primary ? "content--white-color" : props.secondary
        ? "content--grey-color" : "");

    const classes = ` ${fontSize} ${color}`;

    return (
        <span className={`content ${classes} `}>
            {children}
        </span>
    )
};