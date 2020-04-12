import React from "react";
import './Title.scss'

export const Title: React.FC = (props: any) => {
    const {children} = props;

    const fontSizeContent = (props.lgFontSize ? "title title--lg-font-size" : 'title');

    return (
        <h3 className={fontSizeContent}>
            {props.category}
            {children}
        </h3>
    )
};