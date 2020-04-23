import React from "react";
import '../../assets/styles/scss/common/_common.scss'
import './InnerHTML.scss'

export const InnerHTML = (props: any) => {
    const {children} = props;
    const paddingSize = (props.postPadding ? 'content--post-pd' : '');
    const fontSize = (props.mdFontSize ? "md-font-size" : 'lg-second-font-size');

    const classes = ` ${fontSize} ${paddingSize}`;

    return (
        <p className={classes} dangerouslySetInnerHTML={{__html: children}}>

        </p>
    )
};