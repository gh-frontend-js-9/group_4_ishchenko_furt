import React from "react";
import './Title.scss'

export const Title = (props: any) => {
    const {children} = props;
    let mixin = props.mixin;

    const fontSize = (props.mdFontSize ? "content--md-font-size" : props.lgSecondFontSize
        ? 'content--lg-second-font-size' : props.xxlFontSize ? 'xxl-font-size' : '');
    const color = (props.primary ? "content--white-color" : props.secondary
        ? "content--grey-color" : "");

    return <h3 className={`${color} ${fontSize} ${mixin}`}>
        {props.category}
        {children}
    </h3>;
};