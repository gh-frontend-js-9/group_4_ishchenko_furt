import React from "react";
import './Title.scss'

export const Title = (props: any) => {
    const fontSizeContent = (props.xxlFontSize ? "title title--xxl-font-size" : 'title');
    const {children} = props;

    return (
        <h3 className={fontSizeContent}>
            {props.category}
            {children}
        </h3>
    )
};