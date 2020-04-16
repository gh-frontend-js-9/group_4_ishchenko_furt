import React from "react";
import './Author.scss'

export const Author = (props: any) => {
    const color = (props.primary ? "text-primary" : props.secondary
        ? "text-secondary" : props.textWhite ? 'text-white' : '');
    const fontSize = (props.mdFontSize ? "md-font-size" : props.lgSecondFontSize
        ? 'lg-second-font-size' : props.xxlFontSize ? 'xxl-font-size' : '');

    const classes = `${fontSize} ${color}`;

    return (
        <p className={`author ${classes}`}>
            <span >
                BY TOMAS LAURINAVICIUS IN {props.tags}
            </span>
        </p>
    )
};