import React from 'react'
import './Content.scss'

export const Content = (props) => {
    const {children} = props;

    const fontSize = (
        props.smFontSize ? "sm-font-size"
            : props.mdFontSize ? "md-font-size"
            : props.lgSecondFontSize ? 'lg-second-font-size'
                : props.xxlFontSize ? 'xxl-font-size'
                    : props.xxxlFontSize ? 'xxxl-font-size' : "");

    const color = (props.textWhite ? "text-white"
        : props.primary
            ? "primary" : "");

    const classes = ` ${fontSize} ${color}`;

    return (
        <span className={`content ${classes} `}>
            {children}
        </span>
    )
};