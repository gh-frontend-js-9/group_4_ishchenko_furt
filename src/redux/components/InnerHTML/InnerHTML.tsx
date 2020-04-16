import React from "react";

export const InnerHTML = (props: any) => {
    const {children} = props;
    const paddingSize = (props.postPadding ? 'content--post-pd' : '');
    const fontSize = (props.mdFontSize ? "md-font-size" : 'lg-second-font-size');
    const color = (props.primary ? "primary" : '');

    const classes = ` ${fontSize} ${color} ${paddingSize}`;

    return (
        <p className={classes} dangerouslySetInnerHTML={{__html: children}}>

        </p>
    )
};