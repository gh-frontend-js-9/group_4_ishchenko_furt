import React from "react";
import './Title.scss'

export const Title = (props: any) => {
    const {children} = props;
    let mixin = props.mixin;

    const fontSize = (
        props.mdFontSize ? "md-font-size"
        : props.lgSecondFontSize ? 'lg-second-font-size'
            : props.xxlFontSize ? 'xxl-font-size'
                : props.xxxlFontSize ? 'xxxl-font-size' : "");

    const color = (props.white ? "text-white" : props.primary
        ? "primary" : "");

    return (
        <h3 className={`title ${color} ${fontSize} ${mixin}`}>
            {props.category}
            {children}
        </h3>
    )
};